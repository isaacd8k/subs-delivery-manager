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
  ModalFooter,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Input,
  Divider,
  FormHelperText,
  Box,
  Text,
  Heading,
  Icon,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import { PendingQtyChange, PubSubscription } from "../../graphql/types";
import { updatePubSubscription } from "../../graphql/mutations";
import { WarningTwoIcon } from "@chakra-ui/icons";

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
    pubSubscription.qty.toString()
  );
  const [adjustedEffectiveDate, setAdjustedEffectiveDate] = useState("");
  const [isAdjustedQtyImmediate, setIsAdjustedQtyImmediate] = useState(false);
  const [isSubToBeCanceled, setIsSubToBeCanceled] = useState(false);
  const [isPendingChangeToBeCanceled, setIsPendingDateToBeCanceled] =
    useState(false);
  const [adjustedStatus, setAdjustedStatus] = useState("");
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const toast = useToast();

  function handleClose() {
    // reset state

    // call close
    onClose();
  }

  async function submitCancelSubscription() {
    // create request
    try {
      await API.graphql({
        query: updatePubSubscription,
        variables: {
          input: {
            id: pubSubscription.id,
            status: "CANCELED",
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (e) {
      return toast({
        title: "Error updating subscription. Please try again",
        position: "top-right",
        status: "error",
      });
    }

    // call success callback
    onSuccess && onSuccess();
  }

  async function submitUpdate() {
    // light validation
    if (!parseInt(adjustedQty)) {
      return;
    }

    const intQty = parseInt(adjustedQty);

    // initial/original state
    let qtyAdjustments = {
      qty: pubSubscription.qty,
      pendingQtyChanges: pubSubscription.pendingQtyChanges,
    };

    // cancel pending changes
    if (isPendingChangeToBeCanceled) {
      qtyAdjustments.pendingQtyChanges = null;
    }

    // make any immediate adjustments
    if (isAdjustedQtyImmediate) {
      qtyAdjustments.qty = intQty;
    } else {
      qtyAdjustments.pendingQtyChanges = [
        {
          qty: intQty,
          effectiveDate: adjustedEffectiveDate,
        },
      ] as PendingQtyChange[];
    }

    // create request
    try {
      await API.graphql({
        query: updatePubSubscription,
        variables: {
          input: {
            id: pubSubscription.id,
            status: adjustedStatus,
            ...qtyAdjustments,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (e) {
      return toast({
        title: "Error creating subscription. Please try again",
        position: "top-right",
        status: "error",
      });
    }

    // call success callback
    onSuccess && onSuccess();
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
            Standing subscription
          </Heading>
          <Text>Subscriber: {pubSubscription.subscriberID}</Text>
          <Text>Quantity: {pubSubscription.qty}</Text>
          {/* Pending change? */}
          {pubSubscription.pendingQtyChanges &&
            pubSubscription.pendingQtyChanges.length > 0 && (
              <Box>Pending change</Box>
            )}
          <Divider mt={4} mb={4} />

          <Heading fontSize="xs" mb={2} textTransform="uppercase">
            Edit subscription
          </Heading>

          <Box
            border="1px solid"
            borderColor="red.500"
            borderRadius="md"
            p={1}
            px={2}
            mt={2}
            fontSize="xs"
          >
            <HStack mb={1} pl={1}>
              <Icon as={WarningTwoIcon} color="GrayText" />
              <Text textAlign="center" textDecoration="underline">
                Pending change
              </Text>
            </HStack>

            <Text>Adjusted qty: 14</Text>
            <Text>Effective on: 2022-06-01</Text>
          </Box>
          {/* Warning already pending change */}
          <Text fontStyle="italic" fontSize="xs" color="red.500" mb={2}>
            Existing pending change: This change will replace the current
            pending change (scheduled for XXXX-XX-XX)
          </Text>

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
          <HStack>
            <FormControl mb={4}>
              <FormLabel htmlFor="adjustedEffectiveDate">
                Effective date
              </FormLabel>

              <RadioGroup>
                <Stack spacing={4} direction="row">
                  <Radio value="1">Next issue</Radio>
                  <Radio value="2">2nd issue</Radio>
                  <Radio value="3">Issue after:</Radio>
                </Stack>
              </RadioGroup>

              <Input
                id="adjustedEffectiveDate"
                type="text"
                placeholder="YYYY-MM"
                value={adjustedEffectiveDate}
                onChange={(e) => setAdjustedEffectiveDate(e.target.value)}
                maxW={40}
              />
              <FormHelperText fontSize="xs">
                Enter the date in which the quantity date will become effective
                (defaults to next issue date).
              </FormHelperText>
            </FormControl>
          </HStack>
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
