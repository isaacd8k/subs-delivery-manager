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
  useToast,
} from "@chakra-ui/react";
import { AsyncSelect, Select } from "chakra-react-select";
import { API } from "aws-amplify";
import {
  ListSubscriberGroupsQuery,
  ListSubscribersQuery,
  Periodical,
  Subscriber,
} from "../../graphql/types";
import { listSubscribers } from "../../graphql/queries";
import { createPubSubscription } from "../../graphql/mutations";

type Props = {
  isOpen: boolean;
  onSuccess?: () => any;
  onClose: () => any;
  periodicalID: string;
};

type DropdownOption = {
  value: string;
  label: string;
  id: string;
};

type DropdownOptions = Array<DropdownOption>;

export default function AddSubscriptionModal({
  isOpen,
  onClose,
  onSuccess,
  periodicalID,
}: Props) {
  const [selectedSubscriberOption, setSelectedSubscriberOption] =
    useState<DropdownOption | null>(null);
  const [subscriberDropdownOptions, setSubscriberDropdownOptions] =
    useState<DropdownOptions>([]);
  const [subscriptionQty, setSubscriptionQty] = useState("1");
  const [startDate, setStartDate] = useState("");
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const toast = useToast();

  // get initial list of subscribers
  useEffect(() => {
    const fetchSubscribers = async () => {
      const subscribers = (await API.graphql<ListSubscriberGroupsQuery>({
        query: listSubscribers,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })) as { data: ListSubscribersQuery } | undefined;

      if (subscribers?.data?.listSubscribers?.items) {
        setSubscriberDropdownOptions(
          // filter out empty subs
          subscribers.data.listSubscribers.items
            .filter((sub) => sub !== null)
            .map((sub) => ({
              value: sub!.id,
              id: sub!.id,
              label: `${sub?.firstName} ${sub?.lastName}`,
            }))
        );
      }
    };

    fetchSubscribers().catch(() => {
      toast({
        title: "Error fetching subscribers",
        position: "top-right",
        status: "error",
      });
    });
  }, [toast]);

  function handleClose() {
    // reset state
    setSelectedSubscriberOption(null);
    setSubscriptionQty("1");
    // call close
    onClose();
  }

  async function createSubscription() {
    // light validation
    if (
      !selectedSubscriberOption ||
      !subscriptionQty ||
      !parseInt(subscriptionQty)
    ) {
      return;
    }

    const subscriberID = selectedSubscriberOption.id;
    const intQty = parseInt(subscriptionQty);

    // create request
    try {
      await API.graphql({
        query: createPubSubscription,
        variables: {
          input: {
            periodicalID: periodicalID,
            subscriberID: subscriberID,
            status: "ACTIVE",
            qty: intQty,
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
        <ModalHeader>Create Periodical Subscription</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Subscriber */}
          <HStack>
            <FormControl mb={4} isRequired>
              <FormLabel htmlFor="subscriber">Subscriber</FormLabel>
              <Select
                options={subscriberDropdownOptions}
                size="lg"
                value={selectedSubscriberOption}
                onChange={(e) => setSelectedSubscriberOption(e)}
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

          {/* Start date -- disabled for now */}
          {/* <HStack>
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
          </HStack> */}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={createSubscription}
            isLoading={formIsSubmitting}
            isDisabled={!selectedSubscriberOption || !subscriptionQty}
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
