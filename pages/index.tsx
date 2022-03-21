import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { listSubscribers } from "../graphql/queries";
import { ListSubscribersQuery, Subscriber } from "../graphql/types";

const Home: NextPage = () => {
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

  // useEffect(() => {
  //   fetchSubscribers();
  // }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => {
        // Since whole app is authenticated, the Authenticator component should
        // probably exist in the _app.tsx level
        fetchSubscribers();

        return (
          <div>
            <h2>Hello, {user.username}</h2>
            <h1>Subscribers</h1>

            {subscribers?.map(
              (sub) =>
                sub && (
                  <p key={sub.id}>
                    {sub.id} | {sub.lastName}, {sub.firstName}
                  </p>
                )
            )}
          </div>
        );
      }}
    </Authenticator>
  );
};

export default Home;
