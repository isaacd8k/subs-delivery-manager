import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Divider,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { PendingQtyChange, PubSubscription } from "../../graphql/types";
import { updatePubSubscription } from "../../graphql/mutations";
import DatePicker from "react-datepicker";
import DatePickerButton from "../common/DatePickerButton";

type Props = {
  isOpen: boolean;
  onSuccess?: () => any;
  onClose: () => any;
  pubSubscription: PubSubscription;
};

export default function EditSubscriptionModal({
  isOpen,
  onClose,
  onSuccess,
  pubSubscription,
}: Props) {
  const [adjustedQty, setAdjustedQty] = useState(
    pubSubscription.pendingQtyChange?.qty.toString() ||
      pubSubscription.qty.toString()
  );

  const [adjustedEffectiveDate, setAdjustedEffectiveDate] = useState(
    new Date()
  );
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const toast = useToast();

  function handleClose() {
    onClose();
  }

  async function submitUpdate() {
    // light validation
    if (!parseInt(adjustedQty) || !adjustedEffectiveDate) {
      return;
    }

    setFormIsSubmitting(true);

    // parse types
    const intQty = parseInt(adjustedQty);
    // locale en-CA outputs in desired format YYYY-MM-DD
    const parsedDate = adjustedEffectiveDate.toLocaleDateString("en-CA");

    // prepare update
    let qtyAdjustments = {
      qty: pubSubscription.qty,
      pendingQtyChange: {
        qty: intQty,
        effectiveDate: parsedDate,
      } as PendingQtyChange,
    };

    // create request
    try {
      await API.graphql({
        query: updatePubSubscription,
        variables: {
          input: {
            subscriberID: pubSubscription.subscriberID,
            periodicalID: pubSubscription.periodicalID,
            ...qtyAdjustments,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      toast({
        title: "Successfully updated subscription",
        position: "top-right",
        status: "success",
      });

      // call success callback
      onSuccess && onSuccess();
    } catch (e) {
      toast({
        title: "Error creating subscription. Please try again",
        position: "top-right",
        status: "error",
      });
    } finally {
      // restore loading state
      setFormIsSubmitting(false);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Periodical Subscription</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Current subscription */}
          <Heading fontSize="xs" mb={2} textTransform="uppercase">
            Current subscription
          </Heading>
          <Box pl={2} fontSize="xs">
            <Text>
              Subscriber:{" "}
              {`${pubSubscription.subscriber.firstName} ${pubSubscription.subscriber.lastName}`}
            </Text>
            <Text>Quantity: {pubSubscription.qty}</Text>

            {/* Pending change? */}
            {pubSubscription.pendingQtyChange && (
              <Box
                border="1px solid"
                borderColor="yellow.500"
                p={2}
                mt={2}
                fontSize="xs"
                borderRadius="md"
              >
                <Heading
                  textDecoration="underline"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  Pending qty adjustment
                </Heading>
                <Text>New qty: {pubSubscription.pendingQtyChange.qty}</Text>

                <Text>
                  Effective date:{" "}
                  {pubSubscription.pendingQtyChange.effectiveDate}
                </Text>
              </Box>
            )}
          </Box>
          <Divider mt={4} mb={4} />

          <Heading fontSize="xs" mb={2} textTransform="uppercase">
            Edit subscription
          </Heading>

          {/* Edit subscription */}
          {/* Adjust quantity */}
          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="adjustedQty">Quantity</FormLabel>

            <NumberInput
              id="adjustedQty"
              value={adjustedQty}
              min={1}
              max={100}
              maxW="28"
              onChange={(e) => setAdjustedQty(e)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          {/* Effective date */}
          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="adjustedEffectiveDate">
              Effective date:
            </FormLabel>
            <DatePicker
              id="adjustedEffectiveDate"
              selected={adjustedEffectiveDate}
              onChange={(date: Date) => setAdjustedEffectiveDate(date)}
              customInput={<DatePickerButton />}
              todayButton="Today"
            />
          </FormControl>

          <Text fontSize="xs">
            Subscriptions changes are pending by default. Review and activate
            pending subscriptions in the Pending Subscriptions section.
          </Text>

          {/* Pending subscription warning */}
          {pubSubscription.pendingQtyChange && (
            <Text fontSize="xs" color="red.500" py={1}>
              NOTE: Your current pending adjustment will be overwritten.
            </Text>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={submitUpdate}
            isLoading={formIsSubmitting}
            isDisabled={!adjustedEffectiveDate || !adjustedQty}
          >
            Submit
          </Button>
          <Button variant="ghost" onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
