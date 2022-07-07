import { Grid } from "@chakra-ui/react";
import React from "react";
import ActionItems from "./ActionItems";
import PeriodicalPublicationsStatus from "./PeriodicalPublicationsStatus";
import SubscribersGroupStatus from "./SubscribersGroupStatus";

export default function Dashboard() {
  return (
    <>
      <ActionItems />

      <Grid gap={2} templateColumns="repeat(3, 1fr)">
        <PeriodicalPublicationsStatus />
        <SubscribersGroupStatus />
      </Grid>
    </>
  );
}
