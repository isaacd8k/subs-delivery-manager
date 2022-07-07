import { Box, GridItem, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function PeriodicalPublicationsStatus() {
  return (
    <GridItem
      colSpan={2}
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      rounded="md"
    >
      <Heading
        size="xs"
        backgroundColor={useColorModeValue("gray.50", "gray.700")}
        padding={2}
      >
        Periodical publications
      </Heading>

      <Box padding={2}>Content</Box>
    </GridItem>
  );
}
