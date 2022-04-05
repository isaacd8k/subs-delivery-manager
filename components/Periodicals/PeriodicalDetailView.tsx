import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React, { useCallback, useEffect, useState } from "react";
import { getPeriodical } from "../../graphql/queries";
import {
  GetPeriodicalQuery,
  Periodical,
  Subscriber,
} from "../../graphql/types";
import AddSubscriptionModal from "./AddSubscriptionModal";
import NewPeriodicalModal from "./NewPeriodicalModal";

export type Props = {
  periodicalID: string;
};

export default function PeriodicalDetailView({ periodicalID }: Props) {
  const [periodical, setPeriodical] = useState<Periodical | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>(null);

  const toast = useToast();
  const {
    isOpen: isEditPeriodicalModalOpen,
    onOpen: onEditPeriodicalModalOpen,
    onClose: onEditPeriodicalModalClose,
  } = useDisclosure();
  const {
    isOpen: isCreateSubscriptionModalOpen,
    onOpen: onCreateSubscriptionModalOpen,
    onClose: onCreateSubscriptionModalClose,
  } = useDisclosure();

  const fetchPeriodicalDetails = useCallback(async () => {
    const periodical = (await API.graphql<GetPeriodicalQuery>({
      query: getPeriodical,
      variables: { id: periodicalID },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: GetPeriodicalQuery };

    setPeriodical(periodical.data.getPeriodical as Periodical);
  }, [periodicalID]);

  useEffect(() => {
    fetchPeriodicalDetails();
  }, [fetchPeriodicalDetails]);

  function onEditPeriodicalSuccess(periodical: Periodical) {
    if (!periodical) {
      // handle possible return undefined
    }

    // refresh subscriber view with data
    setPeriodical(periodical);

    // notify UI
    // success toast
    toast({
      title: "Periodical successfully updated",
      position: "top-right",
      status: "success",
    });

    onEditPeriodicalModalClose();
  }

  if (!periodical) {
    // TODO: Return skeleton? Also in SubscriberViewForm loading
    return <>Loading...</>;
  }

  function test() {
    console.log("test");
  }

  return (
    <div>
      <Flex>
        <Heading>Periodical details</Heading>
      </Flex>

      <Container maxW="container.md">
        {/* Header */}
        <Flex>
          <Heading size="md">Name: {periodical.name}</Heading>
          <Spacer />
          <Button
            variant="link"
            onClick={() => {
              onEditPeriodicalModalOpen();
            }}
          >
            Edit
          </Button>
        </Flex>
        {/* Recurrence info */}
        <Text fontSize="sm" color="InactiveCaptionText">
          {periodical.recurrence}
        </Text>
        {/* Automation settings */}
        <Text fontSize="xs" color="InactiveCaptionText">
          Automation enabled: issues and orders will generate automatically
        </Text>

        <Divider mt={4} mb={4} />

        {/* Issue */}
        <Flex>
          <Heading size="md">Issues</Heading>
          <Spacer />
          <Button colorScheme="blue" variant="link" fontSize="xs">
            Actions [menu?]
          </Button>
        </Flex>
        <Box
          height="36"
          border="1px solid"
          borderColor="blue.700"
          borderRadius="md"
          mt={2}
          mb={6}
        ></Box>

        {/* Subscribers */}
        <Flex>
          <Heading size="md">Subscriptions</Heading>
          <Spacer />
          <Button colorScheme="blue" variant="link" fontSize="xs">
            Edit subscriptions
          </Button>
        </Flex>
        <Box
          height="36"
          border="1px solid"
          borderColor="blue.700"
          borderRadius="md"
          mt={2}
          mb={2}
        >
          Add a subscription. Opens modal with subscriber list and search field.
          Once user selects the subscriber, he can then select quantity and a
          button to add the subscription. Summary view. Then, View All button
          (with list of subscribers)
          <Link
            onClick={() => {
              onCreateSubscriptionModalOpen();
            }}
          >
            Add Subscription
          </Link>
        </Box>
      </Container>

      {/* Modals */}
      <NewPeriodicalModal
        variation="EDIT"
        isOpen={isEditPeriodicalModalOpen}
        onClose={onEditPeriodicalModalClose}
        onSuccess={onEditPeriodicalSuccess}
        periodical={periodical}
      />

      <AddSubscriptionModal
        isOpen={isCreateSubscriptionModalOpen}
        onClose={onCreateSubscriptionModalClose}
        onSuccess={() => {}}
        periodicalID={periodical.id}
      />
    </div>
  );
}
