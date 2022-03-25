import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Spacer,
} from "@chakra-ui/react";

import type { GetSubscriberQuery, Subscriber } from "../../graphql/types";
import { API } from "aws-amplify";
import { getSubscriber } from "../../graphql/queries";
import { updateSubscriber } from "../../graphql/mutations";

export type Props = {
  subscriberID: string;
};

// TODO: Fix unnecessary dup requests. GraphQL mutations automatically return
// the updated record. No need to re-request
export default function SubscriberViewForm({ subscriberID }: Props) {
  const [subscriber, setSubscriber] = useState<Subscriber | null>();
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState<string>("");
  const [updatedLastName, setUpdatedLastName] = useState<string>("");

  async function fetchSubscriberDetails() {
    const subscriber = (await API.graphql<GetSubscriberQuery>({
      query: getSubscriber,
      variables: { id: subscriberID },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: GetSubscriberQuery };

    setSubscriber(subscriber.data.getSubscriber);
  }

  useEffect(() => {
    fetchSubscriberDetails();
  }, []);

  // bind subscriber changes to edit form
  useEffect(() => {
    if (subscriber) {
      setUpdatedFirstName(subscriber.firstName);
      setUpdatedLastName(subscriber.lastName);
    }
  }, [subscriber]);

  async function onSaveEdit() {
    // validate
    if (!updatedFirstName || !updatedLastName) {
      console.log("invalid form data");
      return false;
    }

    // create loading state & dispatch request
    await API.graphql({
      query: updateSubscriber,
      variables: {
        input: {
          id: subscriberID,
          firstName: updatedFirstName,
          lastName: updatedLastName,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    // on load/error, update view
    setIsEditMode(false);
    fetchSubscriberDetails();
  }

  function onCancelEdit() {
    // close form
    setIsEditMode(false);

    // restore state
    if (subscriber) {
      setUpdatedFirstName(subscriber?.firstName);
    }
  }

  if (!subscriber) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Flex>
        <Heading>Subscriber details</Heading>
      </Flex>

      <Container maxW="container.md">
        <Flex>
          <Heading size="md">
            Subscriber: {`${subscriber?.firstName} ${subscriber?.lastName}`}
          </Heading>
          <Spacer />

          <Link
            onClick={() => {
              isEditMode ? onCancelEdit() : setIsEditMode(!isEditMode);
            }}
          >
            {isEditMode ? "Cancel" : "Edit"}
          </Link>
        </Flex>

        <Divider mt={2} mb={2} />

        <Box mb={2}>
          {/* View mode */}
          <p>Name: {`${subscriber?.firstName} ${subscriber?.lastName}`} </p>

          {/* Edit mode */}
          {isEditMode && (
            <Box>
              <FormControl>
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <Input
                  id="firstName"
                  type="text"
                  value={updatedFirstName}
                  onChange={(e) => setUpdatedFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  value={updatedLastName}
                  onChange={(e) => setUpdatedLastName(e.target.value)}
                />
              </FormControl>

              <ButtonGroup variant="outline" isAttached>
                <Button colorScheme="blue" onClick={onSaveEdit}>
                  Save
                </Button>
                <Button onClick={onCancelEdit}>Cancel</Button>
              </ButtonGroup>
            </Box>
          )}
        </Box>

        {/* Active subscriptions */}
        <Box mb={2}>
          <Heading size="sm">Active subscriptions</Heading>
        </Box>

        {/* Recent orders */}
        <Box mb={2}>
          <Heading size="sm">Recent orders</Heading>
        </Box>
      </Container>
    </div>
  );
}
