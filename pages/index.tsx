import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { listSubscribers } from "../graphql/queries";

const Home: NextPage = () => {
  const [subscribers, setSubscribers] = useState([]);

  async function fetchSubscribers() {
    const subscriberData = await API.graphql({
      query: listSubscribers,
    });
    setSubscribers(subscriberData.data.listSubscribers.items);
  }

  function fetchSubscribersTest() {
    setSubscribers([{ id: 0, firstName: "Mock Data", lastName: "Last" }]);
  }

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div>
      <h1>Subscribers</h1>

      {subscribers.map((sub) => (
        <p key={sub.id}>
          {sub.id} | {sub.lastName}, {sub.firstName}
        </p>
      ))}
    </div>
  );
};

export default Home;
