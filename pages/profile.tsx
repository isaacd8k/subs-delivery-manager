import React from "react";
import { AdditionalPageProps } from "./_app";
import { NextPage } from "next";
import {
  Box,
  Button,
  Heading,
  useColorModeValue,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { EmailIcon, InfoOutlineIcon, SettingsIcon } from "@chakra-ui/icons";

type PageProps = AdditionalPageProps & {};

const Profile: NextPage<PageProps> = ({ auth }) => {
  return (
    <div>
      <Heading size="lg" mb={2}>
        My Profile
      </Heading>
      <Box
        display="flex"
        p={2}
        rounded="md"
        bgColor={useColorModeValue("gray.100", "gray.700")}
        alignItems="baseline"
        gridColumnGap={2}
      >
        <InfoOutlineIcon fontSize="sm" />
        <p>
          To change your profile information please contact your network
          administrator
        </p>
      </Box>

      <List spacing={2} my={5}>
        <ListItem>
          <ListIcon as={SettingsIcon} color={"gray.600"} />
          Username: <Text as="samp">{auth.user.username}</Text>
        </ListItem>

        <ListItem>
          <ListIcon as={EmailIcon} color={"gray.600"} />
          Email: <Text as="samp">{auth.user.attributes?.email}</Text>
        </ListItem>
      </List>

      <Box textAlign="left" mt={4}>
        <Button colorScheme="blue" onClick={auth.signOut}>
          Sign out
        </Button>
      </Box>
    </div>
  );
};

export default Profile;
