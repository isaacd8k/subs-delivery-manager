import { ArrowForwardIcon, NotAllowedIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Button,
  useDisclosure,
  Flex,
  Spacer,
  ButtonGroup,
  Divider,
  useToast,
  Badge,
} from "@chakra-ui/react";
import { API } from "aws-amplify";
import React, { useState } from "react";
import { PeriodicalIssue } from "../../../graphql/types";
import ModalConfirmAction from "../../common/ModalConfirmAction";

export type Props = {
  issue: PeriodicalIssue;
  onEdit: () => void;
};

export default function PeriodicalIssueTile({ issue, onEdit }: Props) {
  const [tileIsLoading, setTileIsLoading] = useState(false);
  const toast = useToast();
  const {
    isOpen: isEditPubSubscriptionModalOpen,
    onOpen: onEditPubSubscriptionModalOpen,
    onClose: onEditPubSubscriptionModalClose,
  } = useDisclosure();

  const {
    isOpen: isConfirmCancelSubModalOpen,
    onOpen: onConfirmCancelSubModalOpen,
    onClose: onConfirmCancelSubModalClose,
  } = useDisclosure();

  async function cancelSubscription(
    periodicalID: string,
    subscriberID: string
  ) {}

  return (
    <>
      <Box
        borderRadius="lg"
        border="1px solid"
        borderColor="blue.600"
        p={6}
        key={issue.id}
        sx={{ gridColumnStart: 1 }}
      >
        <Heading size="sm" noOfLines={1}>
          {issue.issueDate}
        </Heading>

        <Text>Status: {issue.status}</Text>
        <Text>isBatchClosed: {issue.isBatchClosed}</Text>

        <Text>Orders: {issue.orders?.items?.length || "0"}</Text>

        <Text fontSize="sm">
          <Button
            leftIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="ghost"
            size="xs"
          >
            View details
          </Button>
        </Text>
      </Box>

      <ModalConfirmAction
        isOpen={isConfirmCancelSubModalOpen}
        onClose={onConfirmCancelSubModalClose}
        onCloseComplete={() => {}}
        heading="Confirm Delete"
        message=""
        onSuccess={() => {}}
      />
    </>
  );
}
