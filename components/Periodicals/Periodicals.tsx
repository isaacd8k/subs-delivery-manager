import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listPeriodicals } from "../../graphql/queries";
import { ListPeriodicalsQuery, Periodical } from "../../graphql/types";

export default function Periodicals() {
  const [periodicals, setPeriodicals] = useState<Periodical[]>([]);

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
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
