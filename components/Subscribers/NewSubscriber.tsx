import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { API } from "aws-amplify";
import { createSubscriber } from "../../graphql/mutations";

export type Props = {
  onCancel: () => any;
  onSave: () => any;
};

export default function NewSubscriber({ onCancel, onSave }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function save() {
    // validate
    if (!firstName || !lastName) {
      // Validation error
      return false;
    }

    // send request
    await API.graphql({
      query: createSubscriber,
      variables: { input: { firstName, lastName } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    // call handler
    onSave();
  }

  function cancel() {
    onCancel();
  }

  return (
    <Box bg="blue.800" p={4} mb={14}>
      <Heading size="lg" mb={4}>
        New Subscriber{(firstName || lastName) && `: ${firstName} ${lastName}`}
      </Heading>

      <HStack mb={4}>
        <Box>
          <FormControl mb={4}>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input
              id="firstName"
              type="text"
              size="lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb={4}>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input
              id="lastName"
              type="text"
              size="lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </Box>
      </HStack>

      <ButtonGroup variant="outline" isAttached>
        <Button colorScheme="blue" onClick={save}>
          Save
        </Button>
        <Button onClick={cancel}>Cancel</Button>
      </ButtonGroup>
    </Box>
  );
}
