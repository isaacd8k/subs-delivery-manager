import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import type { GetSubscriberQuery, Subscriber } from "../../graphql/types";
import { API } from "aws-amplify";
import { getSubscriber } from "../../graphql/queries";
import { updateSubscriber, deleteSubscriber } from "../../graphql/mutations";
import { useRouter } from "next/router";

export type Props = {
  subscriberID: string;
};

// TODO: Fix unnecessary dup requests. GraphQL mutations automatically return
// the updated record. No need to re-request
export default function SubscriberViewForm({ subscriberID }: Props) {
  const [subscriber, setSubscriber] = useState<
    GetSubscriberQuery["getSubscriber"] | null | undefined
  >();
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState<string>("");
  const [updatedLastName, setUpdatedLastName] = useState<string>("");
  const toast = useToast();
  const router = useRouter();
  const formLabelTextColor = useColorModeValue("gray.700", "gray.300");
  const formBgColor = useColorModeValue("gray.50", "gray.700");

  const {
    isOpen: isWarningOpen,
    onOpen: onWarningOpen,
    onClose: onWarningClose,
  } = useDisclosure();

  // memoized to prevent function identity changes on every render
  const fetchSubscriberDetails = useCallback(async () => {
    const subscriber = (await API.graphql<GetSubscriberQuery>({
      query: getSubscriber,
      variables: { id: subscriberID },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: GetSubscriberQuery };

    setSubscriber(subscriber.data.getSubscriber);
  }, [subscriberID]);

  useEffect(() => {
    fetchSubscriberDetails();
  }, [fetchSubscriberDetails]);

  // bind subscriber changes to edit form
  useEffect(() => {
    if (subscriber) {
      setUpdatedFirstName(subscriber.firstName);
      setUpdatedLastName(subscriber.lastName);
    }
  }, [subscriber]);

  async function onSaveEdit() {
    // validate
    if (!updatedFirstName || !updatedLastName) {
      console.log("invalid form data");
      return false;
    }

    // create loading state & dispatch request
    await API.graphql({
      query: updateSubscriber,
      variables: {
        input: {
          id: subscriberID,
          firstName: updatedFirstName,
          lastName: updatedLastName,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    // on load/error, update view
    setIsEditMode(false);
    fetchSubscriberDetails();
  }

  function onCancelEdit() {
    // close form
    setIsEditMode(false);

    // restore state
    if (subscriber) {
      setUpdatedFirstName(subscriber?.firstName);
      setUpdatedLastName(subscriber?.lastName);
    }
  }

  async function onDeleteSubscriber() {
    // call modal
    await API.graphql({
      query: deleteSubscriber,
      variables: { input: { id: subscriberID } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    // success
    toast({
      title: "Subscriber deleted",
      position: "top-right",
      status: "success",
    });

    // error?

    onWarningClose();
    router.push("/subscribers");
  }

  if (!subscriber) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Container maxW="container.md">
        <Flex>
          <Heading size="md">Subscriber details</Heading>
          <Spacer />

          <Button
            variant="link"
            onClick={() => {
              isEditMode ? onCancelEdit() : setIsEditMode(!isEditMode);
            }}
          >
            {isEditMode ? "Cancel" : "Edit"}
          </Button>
        </Flex>

        <Divider mt={2} mb={2} />

        <Box mb={2}>
          {/* View mode */}
          <p>Name: {`${subscriber?.firstName} ${subscriber?.lastName}`}</p>

          {/* Edit mode */}
          {isEditMode && (
            <Box my={4} py={6} px={{ base: 3, md: 6 }} bgColor={formBgColor}>
              <Heading as="h4" size="xs">
                Edit subscriber details
              </Heading>

              <VStack spacing={3} mt={2} mb={6}>
                <FormControl>
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <Input
                    id="firstName"
                    type="text"
                    value={updatedFirstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUpdatedFirstName(e.target.value)
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="lastName">Last name</FormLabel>
                  <Input
                    id="lastName"
                    type="text"
                    value={updatedLastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUpdatedLastName(e.target.value)
                    }
                  />
                </FormControl>

                <ButtonGroup variant="outline" isAttached>
                  <Button onClick={onSaveEdit}>Save</Button>
                  <Button onClick={onCancelEdit}>Cancel</Button>
                </ButtonGroup>
              </VStack>

              <Text fontSize="xs" color={formLabelTextColor} mt={"12"}>
                Delete subscriber
              </Text>
              <Box mt={2}>
                <Text fontSize="sm" mb={2}>
                  Note: Deleting is permanent. In order to delete, you must
                  first remove the subscriber from any groups and subscriptions.
                </Text>
                <Stack
                  direction="row"
                  justifyContent={{ base: "center", sm: "flex-start" }}
                >
                  <Button
                    variant="outline"
                    colorScheme="red"
                    onClick={onWarningOpen}
                  >
                    Delete
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}
        </Box>

        {/* Active subscriptions */}
        <Box mb={2}>
          <Heading size="sm">Active subscriptions</Heading>
          {subscriber.pubSubscriptions?.items.map(
            (sub) =>
              sub && (
                <Box key={sub.subscriberID + sub.periodicalID}>
                  {sub.periodical.name}
                </Box>
              )
          )}
          {subscriber.pubSubscriptions?.items.length || (
            <Text>No active subscriptions</Text>
          )}
        </Box>

        {/* Recent orders */}
        <Box mb={2}>
          <Heading size="sm">Recent orders</Heading>
        </Box>
      </Container>

      <>
        <Modal onClose={onWarningClose} isOpen={isWarningOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Are you sure you wish to delete? This action is non-reversible.
            </ModalBody>
            <ModalFooter>
              <ButtonGroup>
                <Button colorScheme="red" onClick={onDeleteSubscriber}>
                  Delete
                </Button>
                <Button onClick={onWarningClose}>Cancel</Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}
