import {
  ArrowForwardIcon,
  MinusIcon,
  RepeatClockIcon,
  RepeatIcon,
  SettingsIcon,
  SmallAddIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
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
import { getPeriodical } from "../../graphql/queries";
import {
  GetPeriodicalQuery,
  Periodical,
  PubSubscription,
  Subscriber,
} from "../../graphql/types";
import AddSubscriptionModal from "./AddSubscriptionModal";
import EditSubscriptionModal from "./EditSubscriptionModal";
import NewPeriodicalModal from "./NewPeriodicalModal";

export type Props = {
  periodicalID: string;
};

export default function PeriodicalDetailView({ periodicalID }: Props) {
  const [periodical, setPeriodical] = useState<Periodical | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>(null);
  const [selectedPubSub, setSelectedPubSub] = useState<PubSubscription | null>(
    null
  );

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
              <Heading size="xs">Upcoming subscription changes</Heading>
              {/* Grid */}
              <HStack my={2}>
                <Box
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="green.700"
                  p={2}
                  fontSize="xs"
                  w="44"
                >
                  Name <br />
                  Current Qty: 3<br />
                  Pending Qty: 5 (+2)
                  <br />
                  Effective: MM-DD-YYYY <br />
                  Effective status: <Badge colorScheme="green">Ready</Badge>
                </Box>
                <Box
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.600"
                  p={2}
                  fontSize="xs"
                  w="44"
                >
                  Name <br />
                  Current Qty: 3<br />
                  Pending Qty: 1 (-2)
                  <br />
                  Effective on: MM-DD-YYYY <br />
                  Status: <Badge>Pending</Badge>
                </Box>
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
                            Pending change:
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
    </div>
  );
}
