import React, { useEffect, useState } from "react";

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
import { createPeriodical, updatePeriodical } from "../../graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  CreatePeriodicalMutation,
  Periodical,
  UpdatePeriodicalMutation,
} from "../../graphql/types";

type Props = {
  variation?: "NEW" | "EDIT";
  isOpen: boolean;
  onSuccess?: (periodical: Periodical) => any;
  onClose: () => any;
  periodical?: Pick<Periodical, "name" | "recurrence" | "id">;
};

export default function NewPeriodicalModal({
  variation = "NEW",
  isOpen,
  onSuccess,
  onClose,
  periodical,
}: Props) {
  const [periodicalName, setPeriodicalName] = useState(periodical?.name ?? "");
  const [periodicalFreq, setPeriodicalFreq] = useState(
    periodical?.recurrence ?? "MONTHLY"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  function resetState() {
    setPeriodicalName("");
  }

  // unmount cleanup
  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  function closeModal() {
    // reset state only on 'New' form
    if (variation === "NEW") {
      resetState();
    }

    setIsSubmitting(false);
    // close modal
    onClose();
  }

  async function submitNewPeriodical() {
    // must enter periodical name and frequency
    if (!periodicalName || !periodicalFreq) {
      return console.error("Error: must enter periodical name and freq.");
    }

    // enter submitting state
    setIsSubmitting(true);

    const { data } = (await (
      API.graphql({
        query: createPeriodical,
        variables: {
          input: { name: periodicalName, recurrence: periodicalFreq },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<CreatePeriodicalMutation>>
    ).catch((error) => {
      console.error("Error. Add error in toast");
    })) as GraphQLResult<CreatePeriodicalMutation>;

    await new Promise((resolve) => setTimeout(resolve, 3000));

    // restore submitting state
    setIsSubmitting(false);
    // reset state
    if (variation === "NEW") {
      resetState();
    }
    console.log(data);

    // call success callback
    onSuccess && onSuccess(data?.createPeriodical as Periodical);
  }

  async function editPeriodical() {
    if (!periodical) {
      return console.error("No Periodical provided to edit component");
    }

    if (!periodicalName || !periodicalFreq) {
      return console.error("Error: must enter periodical name and freq");
    }

    // enter submitting state
    setIsSubmitting(true);

    // make request
    const { data } = (await (
      API.graphql({
        query: updatePeriodical,
        variables: {
          input: {
            id: periodical.id,
            name: periodicalName,
            recurrence: periodicalFreq,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }) as Promise<GraphQLResult<UpdatePeriodicalMutation>>
    ).catch((error) => {
      // TODO: Add error in toast
      console.error("Error. Add error in toast");
    })) as GraphQLResult<UpdatePeriodicalMutation>;

    // restore submitting state
    setIsSubmitting(false);
    // reset state
    if (variation === "NEW") {
      resetState();
    }

    // call success callback
    onSuccess && onSuccess(data?.updatePeriodical as Periodical);
  }

  function submitEditOrCreatePeriodical() {
    if (variation === "EDIT") {
      return editPeriodical();
    }
    submitNewPeriodical();
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {variation === "EDIT" ? "Edit" : "New"} Periodical
        </ModalHeader>
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
            onClick={submitEditOrCreatePeriodical}
            isLoading={isSubmitting}
          >
            Submit
          </Button>
          <Button variant="ghost" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
