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
  Text,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { API } from "aws-amplify";
import { ListSubscribersQuery } from "../../graphql/types";
import { listSubscribers } from "../../graphql/queries";
import { createPubSubscription } from "../../graphql/mutations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GraphQLOptions, GraphQLResult } from "@aws-amplify/api-graphql";
import { ListActiveSubscribersQuery } from "../../graphql/custom/custom-types";
import { listActiveSubscribers } from "../../graphql/custom/custom-queries";
import DatePickerButton from "../common/DatePickerButton";

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
  const [startDate, setStartDate] = useState(new Date());
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const toast = useToast();

  // get initial list of subscribers
  useEffect(() => {
    const fetchSubscribersQueryObject: GraphQLOptions = {
      query: listSubscribers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    };
    const fetchActiveSubscriberIdsQueryObject: GraphQLOptions = {
      query: listActiveSubscribers,
      variables: {
        periodicalID: periodicalID,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    };

    const fetchSubscribers = async () => {
      // immediately dispatch async operations
      const subscribersPromise = API.graphql(
        fetchSubscribersQueryObject
      ) as Promise<GraphQLResult<ListSubscribersQuery>>;
      const activeSubscriberIdsPromise = API.graphql(
        fetchActiveSubscriberIdsQueryObject
      ) as Promise<GraphQLResult<ListActiveSubscribersQuery>>;

      // initialize resolved vars
      let subscribers: GraphQLResult<ListSubscribersQuery> | null = null;
      let activeSubscriberIds: GraphQLResult<ListActiveSubscribersQuery> | null =
        null;

      // await promises and assign values
      try {
        [subscribers, activeSubscriberIds] = await Promise.all([
          subscribersPromise,
          activeSubscriberIdsPromise,
        ]);
      } catch (e) {
        // toast error
        toast({
          title: "Error fetching subscribers. Please try again",
          position: "top-right",
          status: "error",
        });
      }

      // set state
      if (subscribers?.data?.listSubscribers?.items) {
        // new options value
        let dropdownOptions = subscribers.data.listSubscribers.items
          // filter null values
          .filter((sub) => sub !== null)
          // transform to options value type
          .map((sub) => ({
            value: sub!.id,
            id: sub!.id,
            label: `${sub?.firstName} ${sub?.lastName}`,
            isDisabled: false,
          }));

        // filter out already subscribed
        // flatten array to array of id strings
        const activeSubscribers =
          activeSubscriberIds?.data?.listPubSubscriptions.items?.map(
            (val) => val.subscriberID
          );
        if (activeSubscribers) {
          dropdownOptions = dropdownOptions.map((val) => {
            if (activeSubscribers.includes(val.id)) {
              return {
                ...val,
                label: `${val.label} - already subscribed`,
                isDisabled: true,
              };
            }
            return val;
          });
        }

        // set new value
        setSubscriberDropdownOptions(dropdownOptions);
      } else {
        // if no items in fulfilled promise, set value to empty array
        setSubscriberDropdownOptions([]);
      }
    };

    fetchSubscribers().catch(() => {
      toast({
        title: "Error fetching subscribers",
        position: "top-right",
        status: "error",
      });
    });
  }, [toast, periodicalID]);

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
      !parseInt(subscriptionQty) ||
      !startDate
    ) {
      return;
    }

    const subscriberID = selectedSubscriberOption.id;
    const intQty = parseInt(subscriptionQty);
    // locale en-CA outputs in desired format YYYY-MM-DD
    const parsedDate = startDate.toLocaleDateString("en-CA");

    // create request
    try {
      await API.graphql({
        query: createPubSubscription,
        variables: {
          input: {
            periodicalID: periodicalID,
            subscriberID: subscriberID,
            status: "ACTIVE",
            qty: 0,
            pendingQtyChange: {
              effectiveDate: parsedDate,
              qty: intQty,
            },
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      toast({
        title: "Successfully created subscription",
        position: "top-right",
        status: "success",
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
                noOptionsMessage={() => "No available subscribers"}
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

          <FormControl mb={4} isRequired>
            <FormLabel>Effective on:</FormLabel>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              customInput={<DatePickerButton />}
              todayButton="Today"
            />
          </FormControl>

          <Text fontSize="xs">
            New subscriptions are not active by default. Review and activate
            pending subscriptions in the Upcoming Subscriptions section.
          </Text>
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
