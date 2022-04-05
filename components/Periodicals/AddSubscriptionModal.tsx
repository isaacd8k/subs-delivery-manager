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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { Periodical } from "../../graphql/types";

type Props = {
  isOpen: boolean;
  onSuccess?: () => any;
  onClose: () => any;
  periodicalID: string;
};

export default function AddSubscriptionModal({
  isOpen,
  onClose,
  periodicalID,
}: Props) {
  const [selectedSubscriber, setSelectedSubscriber] = useState("");
  const [subscriptionQty, setSubscriptionQty] = useState("1");
  const [startDate, setStartDate] = useState("");
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);

  function createSubscription() {}

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Periodical Subscription</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Subscriber */}
          <HStack>
            <FormControl mb={4} isRequired>
              <FormLabel htmlFor="subscriber">Subscriber</FormLabel>
              <Input
                id="subscriber"
                type="text"
                size="lg"
                value={selectedSubscriber}
                onChange={(e) => setSelectedSubscriber(e.target.value)}
              />
            </FormControl>
          </HStack>

          {/* Qty */}
          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="qty">Quantity</FormLabel>

            <NumberInput
              value={subscriptionQty}
              min={1}
              max={100}
              maxW="28"
              size="lg"
              onChange={(e) => setSubscriptionQty(e)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          {/* Start date */}
          <HStack>
            <FormControl mb={4}>
              <FormLabel htmlFor="startDate">Start date</FormLabel>
              <Input
                id="startDate"
                type="number"
                size="lg"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <FormHelperText fontSize="xs">
                If this will take effect on a later date, enter it here.
              </FormHelperText>
            </FormControl>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={createSubscription}
            isLoading={formIsSubmitting}
          >
            Submit
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
