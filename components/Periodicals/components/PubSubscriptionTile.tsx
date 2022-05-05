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
import { updatePubSubscription } from "../../../graphql/mutations";
import { PubSubscription } from "../../../graphql/types";
import ModalConfirmAction from "../../common/ModalConfirmAction";
import EditSubscriptionModal from "../EditSubscriptionModal";

export type Props = {
  pubSub: PubSubscription;
  onEdit: () => void;
};

export default function PubSubscriptionTile({ pubSub, onEdit }: Props) {
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
  ) {
    if (tileIsLoading) {
      return false;
    }

    setTileIsLoading(true);
    try {
      await API.graphql({
        query: updatePubSubscription,
        variables: {
          input: {
            periodicalID,
            subscriberID,
            // cancel qty change
            qty: 0,
            pendingQtyChange: null,
            status: "CANCELED",
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      // inform UI
      toast({
        title: "Success",
        position: "top-right",
        status: "success",
      });

      // inform parent
      onEdit();
    } catch (e) {
      toast({
        title: "Error canceling the subscription. Please try again",
        position: "top-right",
        status: "error",
      });
    } finally {
      setTileIsLoading(false);
    }
  }

  return (
    <>
      <Box
        borderRadius="lg"
        border="1px solid"
        borderColor="blue.600"
        p={6}
        key={pubSub.subscriberID + pubSub.periodicalID}
      >
        <Flex direction="column" justifyContent="space-between" h="full">
          <Box>
            {/* Heading */}
            <Heading size="sm">
              <Flex>
                <Text isTruncated maxW="40">
                  {pubSub.subscriber.firstName} {pubSub.subscriber.lastName}
                </Text>
                <Spacer />
                <Text>
                  <Text fontSize="xs" as="abbr" color="GrayText">
                    QTY
                  </Text>{" "}
                  {pubSub.qty}
                </Text>
              </Flex>
            </Heading>

            {/* Meta data */}
            {pubSub.status === "ACTIVE" ? (
              <>
                <Text fontSize="xs" color="GrayText">
                  Created: {new Date(pubSub.createdAt).toLocaleDateString()}
                </Text>

                {pubSub.pendingQtyChange && (
                  <Text fontSize="xs" color="GrayText">
                    Pending quantity: {pubSub.pendingQtyChange.qty}
                  </Text>
                )}
              </>
            ) : (
              <Badge>CANCELED</Badge>
            )}
          </Box>

          <Spacer />
          <Divider my={2} />

          {/* Buttons */}
          <ButtonGroup
            isAttached
            variant="ghost"
            colorScheme="teal"
            size="xs"
            w="full"
            justifyContent="center"
          >
            {pubSub.status === "ACTIVE" ? (
              // If active, show Edit buttons
              <>
                <Button
                  leftIcon={<ArrowForwardIcon />}
                  onClick={onEditPubSubscriptionModalOpen}
                >
                  Edit qty
                </Button>

                {/* Only allow cancel if qty is 0 and no pending qty change */}

                <Button
                  leftIcon={<NotAllowedIcon />}
                  onClick={onConfirmCancelSubModalOpen}
                  colorScheme="red"
                  isDisabled={pubSub.qty !== 0 || !!pubSub.pendingQtyChange}
                >
                  Cancel sub.
                </Button>
              </>
            ) : (
              // If inactive, show Reactivate buttons
              <Button
                leftIcon={<RepeatIcon />}
                onClick={() => {}}
                colorScheme="purple"
                variant="outline"
              >
                Reactivate
              </Button>
            )}
          </ButtonGroup>
        </Flex>
      </Box>

      <EditSubscriptionModal
        isOpen={isEditPubSubscriptionModalOpen}
        onClose={onEditPubSubscriptionModalClose}
        onSuccess={() => {
          onEdit();
          onEditPubSubscriptionModalClose();
        }}
        pubSubscription={pubSub}
      />

      <ModalConfirmAction
        isOpen={isConfirmCancelSubModalOpen}
        onClose={onConfirmCancelSubModalClose}
        onCloseComplete={() => {}}
        heading="Confirm Delete"
        message={`Are you sure you wish to cancel
          ${pubSub.subscriber.firstName} ${pubSub.subscriber.lastName}'s
          subscription? This will take place immediately.`}
        onSuccess={() => {
          cancelSubscription(pubSub.periodicalID, pubSub.subscriberID);
        }}
      />
    </>
  );
}
