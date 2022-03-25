import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Link,
  ListItem,
  OrderedList,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listSubscribers } from "../../graphql/queries";
import { ListSubscribersQuery, Subscriber } from "../../graphql/types";
import NewSubscriber from "./NewSubscriber";
import NextLink from "next/link";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState<Array<Subscriber> | null[]>(
    []
  );

  const [isNewSubVisible, setNewSubVisible] = useState(false);

  async function fetchSubscribers() {
    const subscriberData = (await API.graphql<ListSubscribersQuery>({
      query: listSubscribers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: ListSubscribersQuery };

    setSubscribers(subscriberData.data.listSubscribers?.items as Subscriber[]);
  }

  useEffect(() => {
    fetchSubscribers();
  }, []);

  function toggleNewSubscriber() {
    setNewSubVisible((prev) => !prev);
  }

  function newSubscriberSave() {
    setNewSubVisible(false);
    fetchSubscribers();
  }
  function newSubscriberCancel() {
    setNewSubVisible(false);
  }

  return (
    <div>
      <Heading>Subscribers & Groups</Heading>

      {/* Groups */}
      <Box bg="tomato" p={4} mb={14}>
        <Flex>
          <Heading size="md">Groups</Heading>
          <Spacer />
          <p>Edit</p>
        </Flex>
        View groups, edit groups (if authorized)
        <SimpleGrid minChildWidth="200px" spacing="40px">
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
        </SimpleGrid>
      </Box>

      {/* Subscribers */}
      <Box bg="darksalmon" p={4} mb={14}>
        <Flex>
          <Heading size="md">Subscribers</Heading>
          <Spacer />
          <p>Edit</p>
        </Flex>
        {/* Module description */}
        <p>
          Subscribers can be added to groups, subscribe to periodicals and place
          orders
        </p>
        {isNewSubVisible && (
          <NewSubscriber
            onCancel={newSubscriberCancel}
            onSave={newSubscriberSave}
          />
        )}
        {/* <SubscriberViewForm /> */}
        {/* Filters */}
        <Divider mt={2} mb={2} />
        <Input placeholder="Type to search subscribers" maxW="sm" />
        <Button size="sm" onClick={toggleNewSubscriber}>
          Add new subscriber
        </Button>
        {/* List */}
        <OrderedList>
          {subscribers.map(
            (sub) =>
              sub && (
                <NextLink href={`/subscriber/${sub.id}`} key={sub.id} passHref>
                  <Link>
                    <ListItem key={sub.id}>
                      {sub.firstName} {sub.lastName}
                    </ListItem>
                  </Link>
                </NextLink>
              )
          )}
        </OrderedList>
      </Box>
    </div>
  );
}
