import type { NextPage } from "next";
import { useState } from "react";
import { API } from "aws-amplify";
import { listSubscribers } from "../graphql/queries";
import { ListSubscribersQuery, Subscriber } from "../graphql/types";
import { AdditionalPageProps } from "./_app";
import Dashboard from "../components/Home/Dashboard";
import { Container, Text } from "@chakra-ui/react";

type PageProps = AdditionalPageProps & {};

const Home: NextPage<PageProps> = ({ auth }) => {
  const [subscribers, setSubscribers] = useState<Array<Subscriber> | null[]>(
    []
  );

  async function fetchSubscribers() {
    const subscriberData = (await API.graphql<ListSubscribersQuery>({
      query: listSubscribers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: ListSubscribersQuery };

    setSubscribers(subscriberData.data.listSubscribers?.items as Subscriber[]);
  }

  return (
    <>
      {/* Greeting */}
      <Text fontSize="3xl">
        <h2>Hello, {auth.user.username}</h2>
      </Text>

      {/* Render the dashboard */}
      <Dashboard />
    </>
  );
};

export default Home;
