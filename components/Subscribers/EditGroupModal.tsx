import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Text,
  Stack,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import {
  createSubscriberGroup,
  updateSubscriber,
  updateSubscriberGroup,
} from "../../graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  CreateSubscriberGroupMutation,
  Subscriber,
  UpdateSubscriberMutation,
} from "../../graphql/types";
import { MinusIcon } from "@chakra-ui/icons";

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

  async function submitNameEdit() {
    // error: must enter group name
    if (!groupName) {
      return console.error(
        `Error: must enter group name. Need to add validation in GraphQL schema as well. 
        Add error message in form`
      );
    }

    const data = await (
      API.graphql({
        query: updateSubscriberGroup,
        variables: { input: { id: groupData.id, name: groupName } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<CreateSubscriberGroupMutation>>
    ).catch(() => {
      console.error("New Group promise rejected. Add error message in Toast?");
    });

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
    await (
      API.graphql({
        query: updateSubscriber,
        variables: { input: { id: memberID, subscriberGroupID: groupID } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<UpdateSubscriberMutation>>
    ).catch(() => {
      console.log("err");
    });

    // call onEditSubscriber
    onEditSubscriber && onEditSubscriber();
  }

  async function removeSubscriberFromGroup({ memberID }: { memberID: string }) {
    await (
      API.graphql({
        query: updateSubscriber,
        variables: { input: { id: memberID, subscriberGroupID: null } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<UpdateSubscriberMutation>>
    ).catch(() => {
      console.log("err");
    });

    // call onEditSubscriber
    onEditSubscriber && onEditSubscriber();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
                onClick={submitNameEdit}
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
                {/* Edit btn */}
                <Link fontSize="sm">Edit</Link>

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
                      <Text maxW="32" isTruncated>
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
                      >
                        <MinusIcon />
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
                {/* Edit btn */}
                <Link fontSize="sm">Edit</Link>

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
                      <Text maxW="32" isTruncated>
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
                      >
                        Add
                      </Button>
                    </Stack>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
