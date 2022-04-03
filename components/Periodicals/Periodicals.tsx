import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listPeriodicals } from "../../graphql/queries";
import {
  ListPeriodicalsQuery,
  Periodical,
  PeriodicalRecurrence,
} from "../../graphql/types";
import NewPeriodicalModal from "./NewPeriodicalModal";

export default function Periodicals() {
  const [periodicals, setPeriodicals] = useState<Periodical[]>([]);
  const [periodicalToEdit, setPeriodicalToEdit] = useState<Pick<
    Periodical,
    "id" | "name" | "recurrence"
  > | null>(null);
  const {
    isOpen: isNewPeriodicalModalOpen,
    onOpen: onNewPeriodicalModalOpen,
    onClose: onNewPeriodicalModalClose,
  } = useDisclosure();
  const {
    isOpen: isEditPeriodicalModalOpen,
    onOpen: onEditPeriodicalModalOpen,
    onClose: onEditPeriodicalModalClose,
  } = useDisclosure();

  useEffect(() => {
    // fetch Periodicals
    fetchPeriodicals();
  }, []);

  async function fetchPeriodicals() {
    try {
      const periodicalsData = (await API.graphql<ListPeriodicalsQuery>({
        query: listPeriodicals,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })) as { data: ListPeriodicalsQuery };
      setPeriodicals(
        periodicalsData.data.listPeriodicals?.items as Periodical[]
      );
    } catch (error) {
      // handle network error
      // handle GQL errors?
      console.error(
        "UNHANDLED  error in fetchPeriodicals() gql promise. Come fix!"
      );
    }
  }

  function onNewPeriodicalSuccess() {
    // refresh local list and close modal
    fetchPeriodicals();
    onNewPeriodicalModalClose();
  }

  function onEditPeriodicalSuccess() {
    fetchPeriodicals();
    onEditPeriodicalModalClose();
  }

  function openEditPeriodical({
    id,
    name,
    recurrence,
  }: Pick<Periodical, "id" | "name" | "recurrence">) {
    setPeriodicalToEdit({
      id,
      name,
      recurrence,
    });
    onEditPeriodicalModalOpen();
  }
  return (
    <div>
      <Heading>Periodicals & Subscriptions</Heading>

      <Box bg="yellow.600" p={4} mb={14}>
        {/* Heading */}
        <Flex>
          <Heading size="md">Periodicals</Heading>
          <Spacer />
          <Link>Edit</Link>
        </Flex>

        <Divider mt={2} mb={2} />

        {/* Periodicals grid */}
        <SimpleGrid
          spacing="40px"
          templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
          mb={6}
        >
          {periodicals.map((periodical) => (
            <Box key={periodical.id} bg="blue" borderRadius="lg" p={6}>
              <Heading size="sm" isTruncated>
                {periodical.name}
              </Heading>

              <Text fontSize="sm">
                Subscribers: {periodical.pubSubscriptions?.items.length ?? "0"}
              </Text>

              <Text fontSize="sm">
                <Link
                  onClick={() =>
                    openEditPeriodical({
                      id: periodical.id,
                      name: periodical.name,
                      recurrence: periodical.recurrence,
                    })
                  }
                >
                  Edit Periodical
                </Link>
              </Text>
            </Box>
          ))}

          {/* EDIT MODE: Add a group button */}
          <Box bg="blue.700" borderRadius="lg" p={6}>
            <Link onClick={onNewPeriodicalModalOpen}>
              <Center height="100%">Add a group</Center>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Modals */}
      <NewPeriodicalModal
        isOpen={isNewPeriodicalModalOpen}
        onClose={onNewPeriodicalModalClose}
        onSuccess={onNewPeriodicalSuccess}
      />

      {periodicalToEdit && (
        <NewPeriodicalModal
          key={periodicalToEdit?.id}
          variation="EDIT"
          isOpen={isEditPeriodicalModalOpen}
          onClose={onEditPeriodicalModalClose}
          onSuccess={onEditPeriodicalSuccess}
          periodical={periodicalToEdit}
        />
      )}
    </div>
  );
}
