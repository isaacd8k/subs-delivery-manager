import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listSubscriberGroups, listSubscribers } from "../../graphql/queries";
import {
  ListSubscriberGroupsQuery,
  ListSubscribersQuery,
  Subscriber,
  SubscriberGroup,
} from "../../graphql/types";
import NewSubscriber from "./NewSubscriber";
import NextLink from "next/link";
import NewGroupModal from "./NewGroupModal";
import EditGroupModal from "./EditGroupModal";
import useDebounce from "../../hooks/useDebouncedValue";

type SubscriberSimple = Pick<
  Subscriber,
  "id" | "firstName" | "lastName" | "group" | "pubSubscriptions"
>;

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
  const debouncedInputValue = useDebounce(searchSubscribersInput, 500);

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
  const responsiveTextLinkColor = useColorModeValue("teal.500", "teal.400");

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
        ({ id, firstName, lastName, group, pubSubscriptions }) => ({
          id,
          firstName,
          lastName,
          group,
          pubSubscriptions,
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

    const input = debouncedInputValue.toLocaleLowerCase();
    const list = subscribers.slice();

    setFilteredSubscribers(
      list.filter((val) => {
        const fullname = `${val.firstName} ${val.lastName}`.toLocaleLowerCase();
        return fullname.indexOf(input) > -1;
      })
    );
  }, [debouncedInputValue, subscribers]);

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
      <Box p={4} mb={14}>
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
          p={2}
        >
          {subGroups === null ? (
            <>Loading</>
          ) : (
            <>
              {subGroups.map((group) => (
                <Box
                  key={group.id}
                  p={6}
                  border="1px solid"
                  borderColor="green.700"
                  borderRadius="lg"
                >
                  <Heading size="sm" noOfLines={1}>
                    Group: {group.name}
                  </Heading>

                  <Text fontSize="sm">
                    Members: {group.members?.items?.length ?? "0"}
                  </Text>

                  <Button
                    leftIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="ghost"
                    size="xs"
                    onClick={() =>
                      openEditGroupModal({
                        groupID: group.id,
                      })
                    }
                  >
                    Edit group
                  </Button>
                </Box>
              ))}
            </>
          )}
        </SimpleGrid>

        {/* EDIT MODE: Add a group button */}
        <Button leftIcon={<AddIcon />} onClick={onAddGroup}>
          Add a group
        </Button>
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
        >
          {filteredSubscribers &&
            filteredSubscribers.map((sub) => (
              <NextLink href={`/subscriber/${sub.id}`} key={sub.id} passHref>
                <Link>
                  <Text maxW="48" noOfLines={1} color={responsiveTextLinkColor}>
                    {sub.firstName} {sub.lastName}
                  </Text>
                </Link>
              </NextLink>
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
