import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Link,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  SimpleGrid,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listSubscriberGroups, listSubscribers } from "../../graphql/queries";
import {
  ListSubscriberGroupsQuery,
  ListSubscribersQuery,
  Subscriber,
  SubscriberGroup,
  UpdateSubscriberMutation,
} from "../../graphql/types";
import NewSubscriber from "./NewSubscriber";
import NextLink from "next/link";
import { updateSubscriber } from "../../graphql/mutations";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>([]);
  const [subGroups, setSubGroups] = useState<SubscriberGroup[] | null>(null);
  const [unassignedSubscribers, setUnassignedSubscribers] = useState<
    Subscriber[]
  >([]);
  const [assignedSubscribers, setAssignedSubscribers] = useState<Subscriber[]>(
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

  async function fetchSubGroups() {
    const subscriberGroups = (await API.graphql<ListSubscriberGroupsQuery>({
      query: listSubscriberGroups,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: ListSubscriberGroupsQuery };

    setSubGroups(
      subscriberGroups.data.listSubscriberGroups?.items as SubscriberGroup[]
    );
  }

  useEffect(() => {
    fetchSubscribers();
    fetchSubGroups();
  }, []);

  useEffect(() => {
    if (subscribers) {
      const unassigned = subscribers.filter((sub) => !sub.subscriberGroupID);
      setUnassignedSubscribers(unassigned);
    }
  }, [subscribers]);

  useEffect(() => {
    if (subscribers) {
      const assigned = subscribers.filter((sub) => sub.subscriberGroupID);
      setAssignedSubscribers(assigned);
    }
  }, [subscribers]);

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
  async function onAddGroupMember({
    memberID,
    groupID,
  }: {
    memberID: String;
    groupID: String;
  }) {
    const data = (await API.graphql({
      query: updateSubscriber,
      variables: {
        input: {
          id: memberID,
          subscriberGroupID: groupID,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: UpdateSubscriberMutation };

    // refresh data
    fetchSubscribers();
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

        <p>View groups, edit groups (if authorized)</p>
        <Divider mt={2} mb={2} />

        {/* Groups Grid */}
        <SimpleGrid
          spacing="40px"
          templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
          mb={6}
        >
          {subGroups === null ? (
            <>Loading</>
          ) : (
            <>
              {subGroups.map((group) => (
                <Box key={group.id} bg="blue" borderRadius="lg" p={6}>
                  <Heading size="sm" isTruncated>
                    Group: {group.name}
                  </Heading>

                  <Text fontSize="sm">
                    Members: {group.members?.items?.length ?? "0"}
                  </Text>
                  <Text fontSize="sm">Show members:</Text>
                  <UnorderedList>
                    {assignedSubscribers
                      .filter((sub) => sub.subscriberGroupID === group.id)
                      .map((sub) => (
                        <ListItem
                          key={sub.id}
                        >{`${sub.firstName} ${sub.lastName}`}</ListItem>
                      ))}
                  </UnorderedList>

                  {/* EDIT MODE: Add members */}
                  <Text>Add members:</Text>
                  <List fontSize="xs">
                    {unassignedSubscribers.map((sub) => (
                      <Link
                        key={sub.id}
                        onClick={() =>
                          onAddGroupMember({
                            memberID: sub.id,
                            groupID: group.id,
                          })
                        }
                      >
                        <ListItem>
                          <ListIcon as={AddIcon} />
                          {`${sub.firstName} ${sub.lastName}`}
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Box>
              ))}

              {/* EDIT MODE: Add a group button */}
              <Box bg="blue.700" borderRadius="lg" p={6}>
                <Center height="100%">Add a group</Center>
              </Box>
            </>
          )}
        </SimpleGrid>

        {/* Unassigned subscribers */}
        <Accordion allowToggle>
          <AccordionItem>
            <Heading size="xs">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Unassigned subscribers ({unassignedSubscribers.length})
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              {/* Unassigned subscribers list */}
              <OrderedList>
                {unassignedSubscribers.map((sub) => (
                  <ListItem key={sub.id}>{sub.firstName}</ListItem>
                ))}
              </OrderedList>

              {/* No unassigned subscribers label */}
              {unassignedSubscribers.length < 1 && (
                <Text fontSize="sm">No unassigned subscribers</Text>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
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
        {/* Filters */}
        <Divider mt={2} mb={2} />
        <Input placeholder="Type to search subscribers" maxW="sm" />
        <Button size="sm" onClick={toggleNewSubscriber}>
          Add new subscriber
        </Button>
        {/* List */}
        <OrderedList>
          {subscribers &&
            subscribers.map(
              (sub) =>
                sub && (
                  <NextLink
                    href={`/subscriber/${sub.id}`}
                    key={sub.id}
                    passHref
                  >
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
