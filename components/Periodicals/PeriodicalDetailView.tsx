import {
  ArrowForwardIcon,
  CheckIcon,
  MinusIcon,
  RepeatClockIcon,
  RepeatIcon,
  SettingsIcon,
  SmallAddIcon,
  SmallCloseIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React, { useCallback, useEffect, useState } from "react";
import { updatePubSubscription } from "../../graphql/mutations";
import { getPeriodical } from "../../graphql/queries";
import {
  GetPeriodicalQuery,
  PendingQtyChange,
  Periodical,
  PubSubscription,
  Subscriber,
  UpdatePubSubscriptionMutation,
} from "../../graphql/types";
import ModalConfirmAction from "../common/ModalConfirmAction";
import AddSubscriptionModal from "./AddSubscriptionModal";
import EditSubscriptionModal from "./EditSubscriptionModal";
import NewPeriodicalModal from "./NewPeriodicalModal";
import { findOneAndRemove } from "../../utils/array-utils";

export type Props = {
  periodicalID: string;
};

type QtyChangeAcceptingOrCanceling = {
  subscriberID: string;
  pendingQtyChange: PendingQtyChange;
};

export default function PeriodicalDetailView({ periodicalID }: Props) {
  const [periodical, setPeriodical] = useState<Periodical | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>(null);
  const [modalConfirmActionMessage, setModalConfirmActionMessage] =
    useState("");
  const [selectedPubSub, setSelectedPubSub] = useState<PubSubscription | null>(
    null
  );
  const [currentQtyChangeAccepting, setCurrentQtyChangeAccepting] =
    useState<QtyChangeAcceptingOrCanceling | null>(null);
  const [currentQtyChangeCanceling, setCurrentQtyChangeCanceling] =
    useState<QtyChangeAcceptingOrCanceling | null>(null);
  const [pendingQtyChangeLoadingIDs, setPendingQtyChangeLoadingIDs] = useState<
    string[]
  >([]);

  const toast = useToast();
  const {
    isOpen: isEditPeriodicalModalOpen,
    onOpen: onEditPeriodicalModalOpen,
    onClose: onEditPeriodicalModalClose,
  } = useDisclosure();
  const {
    isOpen: isCreateSubscriptionModalOpen,
    onOpen: onCreateSubscriptionModalOpen,
    onClose: onCreateSubscriptionModalClose,
  } = useDisclosure();
  const {
    isOpen: isEditPubSubscriptionModalOpen,
    onOpen: onEditPubSubscriptionModalOpen,
    onClose: onEditPubSubscriptionModalClose,
  } = useDisclosure();
  const {
    isOpen: isModalConfirmAcceptQtyChangeOpen,
    onOpen: onModalConfirmAcceptQtyChangeOpen,
    onClose: onModalConfirmAcceptQtyChangeClose,
  } = useDisclosure();
  const {
    isOpen: isModalConfirmCancelQtyChangeOpen,
    onOpen: onModalConfirmCancelQtyChangeOpen,
    onClose: onModalConfirmCancelQtyChangeClose,
  } = useDisclosure();

  const fetchPeriodicalDetails = useCallback(async () => {
    const periodical = (await API.graphql<GetPeriodicalQuery>({
      query: getPeriodical,
      variables: { id: periodicalID },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: GetPeriodicalQuery };

    setPeriodical(periodical.data.getPeriodical as Periodical);
  }, [periodicalID]);

  useEffect(() => {
    fetchPeriodicalDetails();
  }, [fetchPeriodicalDetails]);

  function onEditPeriodicalSuccess(periodical: Periodical) {
    if (!periodical) {
      // handle possible return undefined
    }

    // refresh subscriber view with data
    setPeriodical(periodical);

    // notify UI
    // success toast
    toast({
      title: "Periodical successfully updated",
      position: "top-right",
      status: "success",
    });

    onEditPeriodicalModalClose();
  }

  function confirmCancelOrAcceptSubChange(
    subscriberID: string,
    operation: "accept" | "cancel",
    pendingQtyChange: PendingQtyChange
  ) {
    if (operation === "accept") {
      setCurrentQtyChangeAccepting({
        subscriberID,
        pendingQtyChange,
      });
      onModalConfirmAcceptQtyChangeOpen();
    } else {
      // cancel
      setCurrentQtyChangeCanceling({
        subscriberID,
        pendingQtyChange,
      });
      onModalConfirmCancelQtyChangeOpen();
    }
  }

  async function dispatchAcceptSubChange({
    periodicalID,
    subscriberID,
    pendingQtyChange,
  }: QtyChangeAcceptingOrCanceling & { periodicalID: string }) {
    // set loading state
    setPendingQtyChangeLoadingIDs((val) => {
      const values = val.slice();
      values.push(subscriberID);
      return values;
    });

    try {
      await API.graphql<UpdatePubSubscriptionMutation>({
        query: updatePubSubscription,
        variables: {
          input: {
            periodicalID,
            subscriberID,
            // updated qty
            qty: pendingQtyChange.qty,
            pendingQtyChange: null,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      toast({
        title: "Success",
        position: "top-right",
        status: "success",
      });

      fetchPeriodicalDetails();
    } catch {
      toast({
        title: "Something went wrong. Please refresh the page and try again",
        position: "top-right",
        status: "error",
      });
    } finally {
      // remove loading status
      setPendingQtyChangeLoadingIDs((val) => {
        return findOneAndRemove(subscriberID, val);
      });
    }
  }

  async function dispatchCancelSubChange({
    periodicalID,
    subscriberID,
    pendingQtyChange,
  }: QtyChangeAcceptingOrCanceling & { periodicalID: string }) {
    console.log("Dispatch cancel subscription change");

    // set loading state
    setPendingQtyChangeLoadingIDs((val) => {
      const values = val.slice();
      values.push(subscriberID);
      return values;
    });

    try {
      await API.graphql<UpdatePubSubscriptionMutation>({
        query: updatePubSubscription,
        variables: {
          input: {
            periodicalID,
            subscriberID,
            // cancel qty change
            pendingQtyChange: null,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      toast({
        title: "Success",
        position: "top-right",
        status: "success",
      });

      fetchPeriodicalDetails();
    } catch {
      toast({
        title: "Something went wrong. Please refresh the page and try again",
        position: "top-right",
        status: "error",
      });
    } finally {
      // remove loading status
      setPendingQtyChangeLoadingIDs((val) => {
        return findOneAndRemove(subscriberID, val);
      });
    }
  }

  if (!periodical) {
    // TODO: Return skeleton? Also in SubscriberViewForm loading
    return <>Loading...</>;
  }

  return (
    <div>
      <Flex>
        <Heading>Periodical details</Heading>
      </Flex>

      <Container maxW="container.md">
        {/* META */}
        {/* Header */}
        <Flex>
          <Heading size="md">Name: {periodical.name}</Heading>
          <Spacer />
          <Button
            variant="link"
            onClick={() => {
              onEditPeriodicalModalOpen();
            }}
          >
            Edit
          </Button>
        </Flex>
        {/* Recurrence info */}
        <Badge colorScheme="green">{periodical.recurrence}</Badge>

        {/* Automation settings */}
        <Text fontSize="xs" color="InactiveCaptionText">
          Automation enabled: issues and orders will generate automatically
        </Text>

        <Divider mt={4} mb={4} />

        {/* ISSUES */}
        <Box my={6}>
          <Flex>
            <Heading size="md">Issues</Heading>
            <Spacer />
            <Button colorScheme="blue" variant="link" fontSize="xs">
              Actions [menu?]
            </Button>
          </Flex>
          <Box
            border="1px solid"
            borderColor="blue.700"
            borderRadius="md"
            mt={2}
            mb={2}
          >
            {/* Actions pane */}
            <Box p={2} mb={2} borderBottom="1px solid" borderColor="blue.800">
              <Stack spacing={4} direction="row" align="center">
                <Button
                  leftIcon={<RepeatIcon />}
                  colorScheme="pink"
                  variant="ghost"
                  size="sm"
                >
                  Generate issue
                </Button>
                <Button
                  leftIcon={<SettingsIcon />}
                  colorScheme="pink"
                  variant="ghost"
                  size="sm"
                >
                  Settings
                </Button>
              </Stack>
            </Box>

            {/* The issues grid */}
            <SimpleGrid
              pt={2}
              spacing={2}
              templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
            >
              {periodical?.issues?.items.map(
                (issue) =>
                  issue && (
                    <Box
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="blue.600"
                      p={6}
                      key={issue.id}
                      sx={{ gridColumnStart: 1 }}
                    >
                      <Heading size="sm" isTruncated>
                        {issue.issueDate}
                      </Heading>

                      <Text>Status: {issue.status}</Text>

                      <Text>Orders: {issue.orders?.items?.length || "0"}</Text>

                      <Text fontSize="sm">
                        <Button
                          leftIcon={<ArrowForwardIcon />}
                          colorScheme="teal"
                          variant="ghost"
                          size="xs"
                        >
                          A button
                        </Button>
                      </Text>
                    </Box>
                  )
              )}
            </SimpleGrid>

            {/* No issues */}
            {(!periodical.issues ||
              !periodical.issues.items ||
              periodical.issues.items.length < 1) && (
              <Box p={2} textAlign="center">
                No issues.
              </Box>
            )}
          </Box>
        </Box>

        {/* Subscriptions */}
        <Box my={6}>
          <Flex>
            <Heading size="md">Active subscriptions</Heading>
            <Spacer />
            <Button colorScheme="blue" variant="link" fontSize="xs">
              View all
            </Button>
          </Flex>
          <Box
            border="1px solid"
            borderColor="blue.700"
            borderRadius="md"
            mt={2}
            mb={2}
          >
            {/* Actions pane */}
            <Box p={2} mb={2} borderBottom="1px solid" borderColor="blue.800">
              <Stack spacing={4} direction="row" align="center">
                <Button
                  leftIcon={<SmallAddIcon />}
                  colorScheme="purple"
                  variant="ghost"
                  size="sm"
                  onClick={() => onCreateSubscriptionModalOpen()}
                >
                  New subscription
                </Button>
              </Stack>
            </Box>

            {/* Upcoming subscription changes */}
            <Box p={2}>
              <Heading size="xs">Pending subscription changes</Heading>
              {/* Grid */}
              <HStack my={2}>
                {periodical.pubSubscriptions?.items
                  .filter((sub) => sub && sub.pendingQtyChange)
                  .map(
                    (sub) =>
                      sub && (
                        <Box
                          borderRadius="lg"
                          border="1px solid"
                          borderColor={
                            // current date
                            new Date() <=
                            // effective date
                            new Date(sub.pendingQtyChange!.effectiveDate)
                              ? "gray.500"
                              : "green.700"
                          }
                          p={2}
                          fontSize="xs"
                          w="44"
                          key={sub.subscriberID}
                        >
                          {/* Name */}
                          <Text fontWeight="bold">{`${sub.subscriber.firstName} ${sub.subscriber.lastName}`}</Text>
                          {/* Current qty */}
                          <Text>Current qty: {sub.qty}</Text>
                          {/* Pending change */}
                          <Text>
                            Adjusted qty: {sub.pendingQtyChange!.qty}{" "}
                            <Text as="i" color="gray.500">
                              [{sub.pendingQtyChange!.qty > sub.qty ? "+" : "-"}
                              {sub.pendingQtyChange!.qty - sub.qty}]
                            </Text>
                          </Text>
                          {/* Effective date */}
                          <Text>
                            Effective: {sub.pendingQtyChange!.effectiveDate}{" "}
                          </Text>
                          {/* Status */}
                          <Text>
                            Status:
                            {
                              // current date
                              new Date() <=
                              // effective date
                              new Date(sub.pendingQtyChange!.effectiveDate) ? (
                                <Badge>Date pending</Badge>
                              ) : (
                                <Badge colorScheme="green">Ready</Badge>
                              )
                            }
                          </Text>

                          {/* Commit/cancel button */}
                          <ButtonGroup
                            variant="solid"
                            size="xs"
                            my={2}
                            isAttached
                          >
                            {/* If in loading state, show spinner, else show buttons */}
                            {!(
                              pendingQtyChangeLoadingIDs.indexOf(
                                sub.subscriberID
                              ) > -1
                            ) ? (
                              // Show buttons
                              <>
                                <Button
                                  leftIcon={<SmallCloseIcon />}
                                  onClick={() =>
                                    confirmCancelOrAcceptSubChange(
                                      sub.subscriberID,
                                      "cancel",
                                      { ...sub.pendingQtyChange! }
                                    )
                                  }
                                  colorScheme={
                                    // current date
                                    new Date() <=
                                    // effective date
                                    new Date(
                                      sub.pendingQtyChange!.effectiveDate
                                    )
                                      ? "gray"
                                      : "red"
                                  }
                                  // if not date, colorscheme: gray
                                >
                                  Cancel
                                </Button>
                                <Button
                                  leftIcon={<CheckIcon />}
                                  onClick={() =>
                                    confirmCancelOrAcceptSubChange(
                                      sub.subscriberID,
                                      "accept",
                                      { ...sub.pendingQtyChange! }
                                    )
                                  }
                                  colorScheme={
                                    // current date
                                    new Date() <=
                                    // effective date
                                    new Date(
                                      sub.pendingQtyChange!.effectiveDate
                                    )
                                      ? "gray"
                                      : "green"
                                  }
                                >
                                  Accept
                                </Button>
                              </>
                            ) : (
                              // Show loading state
                              <Button
                                isLoading
                                loadingText="Please wait"
                              ></Button>
                            )}
                          </ButtonGroup>
                        </Box>
                      )
                  )}

                {!periodical.pubSubscriptions ||
                  (periodical.pubSubscriptions.items.filter(
                    (sub) => sub && sub.pendingQtyChange
                  ).length < 1 && (
                    <Text textColor="gray.400">
                      No pending subscription changes
                    </Text>
                  ))}
              </HStack>
            </Box>

            <Divider mt={4} mb={4} />

            {/* Subscriptions */}
            <Box p={2}>
              <Heading size="xs">Subscriptions</Heading>

              {/* Subscriptions grid */}
              <SimpleGrid
                spacing={2}
                templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                pt={2}
              >
                {periodical?.pubSubscriptions?.items.map(
                  (pubSub) =>
                    pubSub && (
                      <Box
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="blue.600"
                        p={6}
                        key={pubSub.subscriberID + pubSub.periodicalID}
                      >
                        <Heading size="sm" isTruncated>
                          {pubSub.subscriber.firstName}{" "}
                          {pubSub.subscriber.lastName}
                        </Heading>

                        <Text fontSize="xs">Quantity: {pubSub.qty}</Text>
                        <Text fontSize="xs">
                          Created:{" "}
                          {new Date(pubSub.createdAt).toLocaleDateString()}
                        </Text>

                        <Box
                          border="1px solid"
                          borderColor="gray.700"
                          borderRadius="md"
                          mt={2}
                          mb={2}
                          p={2}
                        >
                          <Heading size="xs">
                            <TimeIcon />
                            Adjusted qty:
                          </Heading>
                        </Box>

                        <Button
                          leftIcon={<ArrowForwardIcon />}
                          colorScheme="teal"
                          variant="ghost"
                          size="xs"
                          onClick={() => {
                            setSelectedPubSub(pubSub);
                            onEditPubSubscriptionModalOpen();
                          }}
                        >
                          Edit subscription
                        </Button>
                      </Box>
                    )
                )}

                {(!periodical.pubSubscriptions ||
                  !periodical.pubSubscriptions.items ||
                  periodical.pubSubscriptions.items.length < 1) && (
                  <Box px={2}>No active subscriptions.</Box>
                )}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>

        <Box my={6}>
          <Flex>
            <Heading size="md">Recently canceled subscriptions</Heading>
            <Spacer />
            <Button colorScheme="blue" variant="link" fontSize="xs">
              View all
            </Button>
          </Flex>
        </Box>
      </Container>

      {/* Modals */}
      <NewPeriodicalModal
        variation="EDIT"
        isOpen={isEditPeriodicalModalOpen}
        onClose={onEditPeriodicalModalClose}
        onSuccess={onEditPeriodicalSuccess}
        periodical={periodical}
      />

      <AddSubscriptionModal
        isOpen={isCreateSubscriptionModalOpen}
        onClose={onCreateSubscriptionModalClose}
        onSuccess={() => {
          fetchPeriodicalDetails();
          onCreateSubscriptionModalClose();
        }}
        periodicalID={periodical.id}
      />

      {selectedPubSub && (
        <EditSubscriptionModal
          key={selectedPubSub.subscriberID + selectedPubSub.periodicalID}
          isOpen={isEditPubSubscriptionModalOpen}
          onClose={onEditPubSubscriptionModalClose}
          onSuccess={() => {
            fetchPeriodicalDetails();
            onEditPubSubscriptionModalClose();
          }}
          pubSubscription={selectedPubSub}
        />
      )}

      {/* Confirm accept qty change */}
      {currentQtyChangeAccepting && (
        <ModalConfirmAction
          key={currentQtyChangeAccepting?.subscriberID + "accept"}
          isOpen={isModalConfirmAcceptQtyChangeOpen}
          onClose={onModalConfirmAcceptQtyChangeClose}
          onCloseComplete={() => setCurrentQtyChangeAccepting(null)}
          onSuccess={() =>
            dispatchAcceptSubChange({
              periodicalID,
              ...currentQtyChangeAccepting,
            })
          }
          heading="Are you sure?"
          message="Are you sure you wish to accept this quantity adjustment?"
        />
      )}

      {/* Confirm cancel qty change */}
      {currentQtyChangeCanceling && (
        <ModalConfirmAction
          key={currentQtyChangeCanceling?.subscriberID + "cancel"}
          isOpen={isModalConfirmCancelQtyChangeOpen}
          onClose={onModalConfirmCancelQtyChangeClose}
          onCloseComplete={() => setCurrentQtyChangeCanceling(null)}
          onSuccess={() =>
            dispatchCancelSubChange({
              periodicalID,
              ...currentQtyChangeCanceling,
            })
          }
          heading="Are you sure?"
          message="Are you sure you wish to cancel this quantity adjustment?"
          confirmBtnText="Yes"
          cancelBtnText="No"
        />
      )}
    </div>
  );
}
