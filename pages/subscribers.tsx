import React from "react";
import { AdditionalPageProps } from "./_app";
import { NextPage } from "next";
import Subscribers from "./../components/Subscribers";

type PageProps = AdditionalPageProps & {};

const SubscribersPage: NextPage<PageProps> = ({ auth }) => {
  return <Subscribers />;
};

export default SubscribersPage;
