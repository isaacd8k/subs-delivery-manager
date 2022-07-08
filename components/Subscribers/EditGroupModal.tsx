import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import {
  deleteSubscriberGroup,
  updateSubscriber,
  updateSubscriberGroup,
} from "../../graphql/mutations";
import { GraphQLOptions, GraphQLResult } from "@aws-amplify/api-graphql";
import {
  CreateSubscriberGroupMutation,
  DeleteSubscriberGroupMutation,
  Subscriber,
  UpdateSubscriberMutation,
} from "../../graphql/types";
import { WarningTwoIcon } from "@chakra-ui/icons";

type Props = {
  isOpen: boolean;
  onSuccess?: () => any; // deprecate
  onEditSubscriber: () => any;
  onEditName: () => any;
  onCancel?: () => any;
  onClose: () => any;
  groupData: {
    name: string;
    members: Subscriber[];
    unassigned: Subscriber[];
    id: string;
  };
};

export default function EditGroupModal({
  isOpen,
  onEditName,
  onEditSubscriber,
  onClose,
  groupData,
}: Props) {
  const [groupName, setGroupName] = useState(groupData.name);
  const [submitNameBtnIsLoading, setSubmitNameBtnIsLoading] = useState(false);
  const [loadingRemoveButtons, setLoadingRemoveButtons] = useState<string[]>(
    []
  );
  const toast = useToast();
  const [loadingAddButtons, setLoadingAddButtons] = useState<string[]>([]);
  const [isQualifiedForDeletion, setIsQualifiedForDeletion] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const mountedRef = useRef(true);

  // on unmount, update mounted flag
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (groupData.members.length === 0) {
      setIsQualifiedForDeletion(true);
    } else {
      setIsQualifiedForDeletion(false);
    }
  }, [groupData]);

  async function submitNameEdit() {
    // error: must enter group name
    if (!groupName) {
      return console.error(
        `Error: must enter group name. Need to add validation in GraphQL schema as well. 
        Add error message in form`
      );
    }

    // set loading state
    setSubmitNameBtnIsLoading(true);

    // request
    const requestOptions: GraphQLOptions = {
      query: updateSubscriberGroup,
      variables: { input: { id: groupData.id, name: groupName } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    };

    const data = await (
      API.graphql({
        query: updateSubscriberGroup,
        variables: { input: { id: groupData.id, name: groupName } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<CreateSubscriberGroupMutation>>
    ).catch(() => {
      if (!mountedRef.current) {
        return null;
      }
      toast({
        title: "An error has occurred. Please try again",
        position: "top-right",
        status: "error",
      });
      // close modal
      onClose();
    });

    // if component is unmounted, ignore update
    if (!mountedRef.current) {
      return null;
    }

    // remove loading state
    setSubmitNameBtnIsLoading(false);

    // call onEditName callback
    onEditName && onEditName();
  }

  async function addSubscriberToGroup({
    memberID,
    groupID,
  }: {
    memberID: string;
    groupID: string;
  }) {
    // update loading state
    setLoadingAddButtons((oldState) => {
      const newState = oldState.slice();
      newState.push(memberID);
      return newState;
    });

    await (
      API.graphql({
        query: updateSubscriber,
        variables: { input: { id: memberID, subscriberGroupID: groupID } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<UpdateSubscriberMutation>>
    ).catch(() => {
      if (!mountedRef.current) {
        return null;
      }

      toast({
        title: "An error has occurred. Please try again",
        position: "top-right",
        status: "error",
      });
      // close modal
      onClose();
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // if component is unmounted, ignore
    if (!mountedRef.current) {
      return null;
    }

    // remove loading state
    setLoadingAddButtons((oldState) => {
      const newState = oldState.slice();
      const idx = newState.findIndex((id) => id === memberID);
      if (idx > -1) {
        newState.splice(idx, 1);
      }
      return newState;
    });

    // call onEditSubscriber
    onEditSubscriber && onEditSubscriber();
  }

  async function removeSubscriberFromGroup({ memberID }: { memberID: string }) {
    // set loading status
    setLoadingRemoveButtons((oldState) => {
      const newState = oldState.slice();
      newState.push(memberID);
      return newState;
    });

    await (
      API.graphql({
        query: updateSubscriber,
        variables: { input: { id: memberID, subscriberGroupID: null } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<UpdateSubscriberMutation>>
    ).catch(() => {
      // if component is unmounted, ignore
      if (!mountedRef.current) {
        return null;
      }

      toast({
        title: "An error has occurred. Please try again",
        position: "top-right",
        status: "error",
      });
      // close modal
      onClose();
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // if component is unmounted, ignore
    if (!mountedRef.current) {
      return null;
    }

    // remove loading status
    setLoadingRemoveButtons((oldState) => {
      const newState = oldState.slice();
      const idx = newState.findIndex((id) => id === memberID);
      if (idx > -1) {
        newState.splice(idx, 1);
      }
      return newState;
    });

    // call onEditSubscriber
    onEditSubscriber && onEditSubscriber();
  }

  async function deleteGroup() {
    try {
      (await API.graphql({
        query: deleteSubscriberGroup,
        variables: { input: { id: groupData.id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })) as Promise<GraphQLResult<DeleteSubscriberGroupMutation>>;

      // if component is unmounted, ignore
      if (!mountedRef.current) {
        return null;
      }

      // success toast
      toast({
        title: "Subscriber group has been successfully deleted",
        position: "top-right",
        status: "success",
      });

      // close modal
      setIsDeleting(false);
      onEditSubscriber();
      onClose();
    } catch {
      // if component is unmounted, ignore
      if (!mountedRef.current) {
        return null;
      }
      // error toast
      toast({
        title: "An error has occurred. Please try again",
        position: "top-right",
        status: "error",
      });
      setIsDeleting(false);
      onClose();
    }
  }

  function onDeleteGroup() {
    // set loading status
    setIsDeleting(true);

    // dispatch event
    deleteGroup();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Group {groupData.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={8}>
            <FormLabel htmlFor="groupName">Group name</FormLabel>
            <HStack>
              <Input
                id="groupName"
                type="text"
                size="lg"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
              <Button
                colorScheme="blue"
                variant="outline"
                mr={3}
                onClick={() => console.log(submitNameEdit())}
                isLoading={submitNameBtnIsLoading}
              >
                Save
              </Button>
            </HStack>
          </FormControl>

          {/* Subscribers */}
          <Accordion allowToggle>
            {/* Members */}
            <AccordionItem>
              <Heading size="xs">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {`Members (${groupData.members.length})`}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>

              <AccordionPanel pb={4}>
                {/* No unassigned */}
                {groupData.members.length < 1 && (
                  <Text align="center">
                    There are no subscribers belonging to this group.
                  </Text>
                )}

                {/* Members list */}
                <SimpleGrid
                  columns={2}
                  spacing={2}
                  maxH={200}
                  overflow="scroll"
                >
                  {groupData.members.map((sub) => (
                    <Stack
                      direction="row"
                      key={sub.id}
                      align="center"
                      justify="space-between"
                    >
                      <Text maxW="32" noOfLines={1}>
                        {sub.firstName} {sub.lastName}
                      </Text>
                      <Button
                        colorScheme="red"
                        size="xs"
                        variant="ghost"
                        onClick={() =>
                          removeSubscriberFromGroup({
                            memberID: sub.id,
                          })
                        }
                        isLoading={loadingRemoveButtons.includes(sub.id)}
                      >
                        Remove
                      </Button>
                    </Stack>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            {/* Unassigned */}
            <AccordionItem>
              <Heading size="xs">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {`Unassigned (${groupData.unassigned.length})`}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>

              <AccordionPanel pb={2}>
                {/* No unassigned */}
                {groupData.unassigned.length < 1 && (
                  <Text align="center">
                    All subscribers are members of a group.
                  </Text>
                )}

                {/* List */}
                <SimpleGrid
                  columns={2}
                  spacing={2}
                  maxH={200}
                  overflow="scroll"
                >
                  {groupData.unassigned.map((sub) => (
                    <Stack
                      direction="row"
                      key={sub.id}
                      align="center"
                      justify="space-between"
                    >
                      <Text maxW="32" noOfLines={1}>
                        {sub.firstName} {sub.lastName}
                      </Text>
                      <Button
                        colorScheme="teal"
                        size="xs"
                        variant="ghost"
                        onClick={() =>
                          addSubscriberToGroup({
                            memberID: sub.id,
                            groupID: groupData.id,
                          })
                        }
                        isLoading={loadingAddButtons.includes(sub.id)}
                      >
                        Add
                      </Button>
                    </Stack>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            {/* Delete group */}
            <AccordionItem>
              <Heading size="xs">
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="xs">
                    DELETE GROUP
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>

              <AccordionPanel pb={2}>
                {/* Warning */}
                <Text fontSize="xs" mb={2}>
                  <WarningTwoIcon /> Note: Deleting is permanent. Before
                  deleting a group, you must remove all members.
                </Text>

                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={onDeleteGroup}
                  isLoading={isDeleting}
                  isDisabled={!isQualifiedForDeletion}
                >
                  Delete
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={onClose}
            isLoading={
              loadingRemoveButtons.length > 0 ||
              loadingAddButtons.length > 0 ||
              submitNameBtnIsLoading
            }
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
