import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function ActionItems() {
  return (
    <Box
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      rounded="md"
      mb={2}
    >
      <Heading size="xs" p={2}>
        Action center
      </Heading>
      <Box p={2}>Items</Box>
    </Box>
  );
}
