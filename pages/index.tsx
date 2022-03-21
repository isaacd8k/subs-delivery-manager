import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { listSubscribers } from "../graphql/queries";

const Home: NextPage = () => {
  const [subscribers, setSubscribers] = useState([]);

  async function fetchSubscribers() {
    const subscriberData = await API.graphql({
      query: listSubscribers,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    setSubscribers(subscriberData.data.listSubscribers.items);
  }

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h2>Hello, {user.username}</h2>
          <h1>Subscribers</h1>

          {subscribers.map((sub) => (
            <p key={sub.id}>
              {sub.id} | {sub.lastName}, {sub.firstName}
            </p>
          ))}
        </div>
      )}
    </Authenticator>
  );
};

export default Home;
