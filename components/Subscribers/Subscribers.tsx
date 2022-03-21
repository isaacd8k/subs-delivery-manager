import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function Subscribers() {
  return (
    <div>
      <Heading>Subscribers & Groups</Heading>
      <Heading size="md">Groups</Heading>
      <Box>View groups, edit groups (if authorized)</Box>

      <Heading size="md">Subscribers</Heading>
      <Box>View subscribers, edit subscribers (if authorized)</Box>
    </div>
  );
}
