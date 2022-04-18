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
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
import NewGroupModal from "./NewGroupModal";
import EditGroupModal from "./EditGroupModal";

type SubscriberSimple = Pick<Subscriber, "id" | "firstName" | "lastName">;

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>([]);
  const [subGroups, setSubGroups] = useState<SubscriberGroup[] | null>(null);
  const [unassignedSubscribers, setUnassignedSubscribers] = useState<
    Subscriber[]
  >([]);
  const [assignedSubscribers, setAssignedSubscribers] = useState<Subscriber[]>(
    []
  );
  const [filteredSubscribers, setFilteredSubscribers] = useState<
    SubscriberSimple[]
  >([]);
  const [searchSubscribersInput, setSearchSubscribersInput] = useState("");

  const {
    isOpen: isNewGroupModalOpen,
    onOpen: onNewGroupModalOpen,
    onClose: onNewGroupModalClose,
  } = useDisclosure();
  const {
    isOpen: isEditGroupModalOpen,
    onOpen: onEditGroupModalOpen,
    onClose: onEditGroupModalClose,
  } = useDisclosure();

  const [isNewSubVisible, setNewSubVisible] = useState(false);
  const [selectedGroupToEdit, setSelectedGroupToEdit] = useState<string | null>(
    null
  );

  async function fetchSubscribers() {
    try {
      const subscriberData = (await API.graphql<ListSubscribersQuery>({
        query: listSubscribers,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })) as { data: ListSubscribersQuery };

      // temporarily store list for sorting
      let list: Subscriber[] = [];
      if (subscriberData.data.listSubscribers?.items) {
        list = subscriberData.data.listSubscribers.items as Subscriber[];
        list.sort((a, b) => a.lastName.localeCompare(b.lastName));
      }
      setSubscribers(list);
    } catch (error) {
      // handle network error
      // handle GQL errors?
      console.error(
        "UNHANDLED  error in fetchSubscribers() gql promise. Come fix!"
      );
    }
  }

  async function fetchSubGroups() {
    const subscriberGroups = (await API.graphql<ListSubscriberGroupsQuery>({
      query: listSubscriberGroups,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: ListSubscriberGroupsQuery };

    let list: SubscriberGroup[] = [];
    if (subscriberGroups.data.listSubscriberGroups?.items) {
      list = subscriberGroups.data.listSubscriberGroups
        .items as SubscriberGroup[];
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    setSubGroups(list);
  }

  // initial data fetch
  useEffect(() => {
    fetchSubscribers();
    fetchSubGroups();
  }, []);

  // populate assigned & unassigned subscribers
  useEffect(() => {
    if (subscribers) {
      const assigned = subscribers.filter((sub) => sub.subscriberGroupID);
      setAssignedSubscribers(assigned);
      const unassigned = subscribers.filter((sub) => !sub.subscriberGroupID);
      setUnassignedSubscribers(unassigned);
    }
  }, [subscribers]);

  // filtered subscribers list
  useEffect(() => {
    let filteredSubscriberList: SubscriberSimple[] = [];

    if (subscribers && subscribers.length > 0) {
      filteredSubscriberList = subscribers.map(
        ({ id, firstName, lastName }) => ({
          id,
          firstName,
          lastName,
        })
      );
    }

    setFilteredSubscribers(filteredSubscriberList);
  }, [subscribers]);

  // filter subscribers list
  useEffect(() => {
    if (!subscribers) {
      return setFilteredSubscribers([]);
    }

    const input = searchSubscribersInput.toLocaleLowerCase();
    const list = subscribers.slice();

    setFilteredSubscribers(
      list.filter((val) => {
        const fullname = `${val.firstName} ${val.lastName}`.toLocaleLowerCase();
        return fullname.indexOf(input) > -1;
      })
    );
  }, [searchSubscribersInput, subscribers]);

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

  function onAddGroup() {
    // open modal
    onNewGroupModalOpen();
  }

  function openEditGroupModal({ groupID }: { groupID: string }) {
    // ensure the groupID and name are not blank
    if (!groupID) {
      return console.error("Edit group modal triggered without valid details");
    }

    // set the edit state
    setSelectedGroupToEdit(groupID);

    // open edit modal
    onEditGroupModalOpen();
  }

  function onNewGroupSuccess() {
    // refresh local list & close modal
    fetchSubGroups();
    onNewGroupModalClose();
  }

  function onEditGroupSuccess() {
    // refresh local list & close modal
    fetchSubGroups();
    onEditGroupModalClose();
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
                  <Text fontSize="sm">
                    <Link
                      onClick={() =>
                        openEditGroupModal({
                          groupID: group.id,
                        })
                      }
                    >
                      Edit group
                    </Link>
                  </Text>
                </Box>
              ))}

              {/* EDIT MODE: Add a group button */}
              <Box bg="blue.700" borderRadius="lg" p={6}>
                <Link onClick={onAddGroup}>
                  <Center height="100%">Add a group</Center>
                </Link>
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
                  <ListItem key={sub.id}>
                    {sub.firstName} {sub.lastName}
                  </ListItem>
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
      <Box bg="" p={4} mb={14}>
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
        <Input
          placeholder="Type to search or add a new subscriber"
          maxW="sm"
          value={searchSubscribersInput}
          onChange={(v) => setSearchSubscribersInput(v.target.value)}
        />
        <Button size="sm" onClick={toggleNewSubscriber}>
          Add new subscriber
        </Button>
        {/* List */}
        <SimpleGrid
          columns={3}
          spacing={2}
          maxH={400}
          overflow="scroll"
          my={6}
          p={2}
          borderLeft="1px solid"
          borderColor="gray.500"
        >
          {filteredSubscribers &&
            filteredSubscribers.map((sub) => (
              <Stack
                direction="row"
                key={sub.id}
                align="center"
                justify="space-between"
              >
                <NextLink href={`/subscriber/${sub.id}`} key={sub.id} passHref>
                  <Link>
                    <Text maxW="48" isTruncated>
                      {sub.firstName} {sub.lastName}
                    </Text>
                  </Link>
                </NextLink>
              </Stack>
            ))}
        </SimpleGrid>
      </Box>

      {/* Modals */}
      <NewGroupModal
        isOpen={isNewGroupModalOpen}
        onClose={onNewGroupModalClose}
        onSuccess={onNewGroupSuccess}
      />

      {selectedGroupToEdit && subGroups && (
        <EditGroupModal
          key={selectedGroupToEdit}
          isOpen={isEditGroupModalOpen}
          onClose={onEditGroupModalClose}
          onEditName={onEditGroupSuccess}
          // TODO: Do we need to make another network request when child network request was already successful?
          onEditSubscriber={() => {
            fetchSubscribers();
            fetchSubGroups();
          }}
          groupData={{
            name:
              subGroups.find((s) => s.id === selectedGroupToEdit)?.name || "",
            members: assignedSubscribers.filter(
              (sub) => sub.subscriberGroupID === selectedGroupToEdit
            ),
            unassigned: unassignedSubscribers,
            id: selectedGroupToEdit,
          }}
        />
      )}
    </div>
  );
}
