import React from "react";
import { AdditionalPageProps } from "./_app";
import { NextPage } from "next";
import Periodicals from "./../components/Periodicals";

type PageProps = AdditionalPageProps & {};

const PeriodicalsPage: NextPage<PageProps> = ({ auth }) => {
  return <Periodicals />;
};

export default PeriodicalsPage;
