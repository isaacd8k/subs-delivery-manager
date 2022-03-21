import { Container } from "@chakra-ui/react";
import React from "react";
import ActionItems from "./ActionItems";
import PeriodicalPublicationsStatus from "./PeriodicalPublicationsStatus";
import SubscribersGroupStatus from "./SubscribersGroupStatus";

export default function Dashboard() {
  return (
    <Container>
      {/* // Action items */}
      <ActionItems />

      {/* // Periodicals Status & Subscribers Grps Status */}
      <PeriodicalPublicationsStatus />
      <SubscribersGroupStatus />
    </Container>
  );
}
