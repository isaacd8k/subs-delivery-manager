import React from "react";
import { AdditionalPageProps } from "./../_app";
import { NextPage } from "next";
import { useRouter } from "next/router";
import PeriodicalDetailView from "../../components/Periodicals/PeriodicalDetailView";

type PageProps = AdditionalPageProps & {};

const Periodical: NextPage<PageProps> = () => {
  const router = useRouter();
  const periodicalID = router.query.id as string;

  if (periodicalID) {
    return <PeriodicalDetailView periodicalID={periodicalID} />;
  } else {
    return <>Loading...</>;
  }
};

export default Periodical;
