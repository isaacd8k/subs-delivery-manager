import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { createSubscriberGroup } from "../../graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { CreateSubscriberGroupMutation } from "../../graphql/types";

type Props = {
  isOpen: boolean;
  onSuccess?: () => any;
  onCancel?: () => any;
  onClose: () => any;
};

export default function NewGroupModal({ isOpen, onSuccess, onClose }: Props) {
  const [groupName, setGroupName] = useState("");

  async function addGroup() {
    // error: must enter group name
    if (!groupName) {
      return console.error(
        "Error: must enter group name. Add error message in form"
      );
    }

    const data = await (
      API.graphql({
        query: createSubscriberGroup,
        variables: { input: { name: groupName } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<CreateSubscriberGroupMutation>>
    ).catch(() => {
      console.error("New Group promise rejected. Add error message in Toast?");
    });

    // reset state
    setGroupName("");
    // call success callback
    onSuccess && onSuccess();
  }

  function closeModal() {
    // reset state
    setGroupName("");
    // close modal
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Group</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack mb={4}>
            <FormControl mb={4}>
              <FormLabel htmlFor="groupName">Group name</FormLabel>
              <Input
                id="groupName"
                type="text"
                size="lg"
                value={groupName}
                isRequired
                onChange={(e) => setGroupName(e.target.value)}
              />
            </FormControl>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={addGroup}>
            Create
          </Button>
          <Button variant="ghost" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
