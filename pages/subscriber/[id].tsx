import React from "react";
import { AdditionalPageProps } from "./../_app";
import { NextPage } from "next";
import { useRouter } from "next/router";
import SubscriberViewForm from "../../components/Subscribers/SubscriberViewForm";

type PageProps = AdditionalPageProps & {};

const Profile: NextPage<PageProps> = () => {
  const router = useRouter();
  const subscriberID = router.query.id as string;

  if (subscriberID) {
    return <SubscriberViewForm subscriberID={subscriberID} />;
  } else {
    return <>Loading...</>;
  }
};

export default Profile;
