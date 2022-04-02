import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { createPeriodical } from "../../graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { CreatePeriodicalMutation } from "../../graphql/types";

type Props = {
  isOpen: boolean;
  onSuccess?: () => any;
  onCancel?: () => any;
  onClose: () => any;
};

export default function NewPeriodicalModal({
  isOpen,
  onSuccess,
  onClose,
}: Props) {
  const [periodicalName, setPeriodicalName] = useState("");
  const [periodicalFreq, setPeriodicalFreq] = useState("MONTHLY");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function closeModal() {
    // reset state
    setPeriodicalName("");
    setPeriodicalFreq("");
    setIsSubmitting(false);
    // close modal
    onClose();
  }

  async function submitPeriodical() {
    // must enter periodical name and frequency
    if (!periodicalName || !periodicalFreq) {
      return console.error("Error: must enter periodical name and freq.");
    }

    // enter submitting state
    setIsSubmitting(true);

    const data = await (
      API.graphql({
        query: createPeriodical,
        variables: {
          input: { name: periodicalName, recurrence: periodicalFreq },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<CreatePeriodicalMutation>>
    ).catch((error) => {
      console.error("Error. Add error in toast");
    });

    // restore submitting state
    setIsSubmitting(false);

    // call success callback
    onSuccess && onSuccess();
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Periodical</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
            <FormControl mb={4} isRequired>
              <FormLabel htmlFor="periodicalName">Periodical name</FormLabel>
              <Input
                id="periodicalName"
                type="text"
                size="lg"
                value={periodicalName}
                onChange={(e) => setPeriodicalName(e.target.value)}
              />
            </FormControl>
          </HStack>

          <HStack mb={2}>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Frequency</FormLabel>
              <RadioGroup
                value={periodicalFreq}
                onChange={(freq) => setPeriodicalFreq(freq)}
              >
                <HStack spacing="24px">
                  <Radio value="MONTHLY">Monthly</Radio>
                  <Radio value="BIMONTHLY">Bimonthly</Radio>
                  <Radio value="QUARTERLY">Quarterly</Radio>
                </HStack>
              </RadioGroup>
              <FormHelperText fontSize="xs">
                Select a frequency: monthly, bimonthly (every two months), or
                quarterly (every four months)
              </FormHelperText>
            </FormControl>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={submitPeriodical}
            isLoading={isSubmitting}
          >
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
