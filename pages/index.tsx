import type { NextPage } from "next";

import { Button, Flex, Heading, Input } from "@chakra-ui/react";

// Show home page if authenticated
const Home: NextPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>

        <Input
          placeholder="email@email.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input placeholder="******" variant="filled" mb={6} type="password" />
        <Button colorScheme="teal">Log in</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
