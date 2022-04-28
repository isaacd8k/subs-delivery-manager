import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => any;
  onCloseComplete: () => void;
  heading?: string;
  message: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  onSuccess: () => any;
  onCancel?: () => any;
};

export default function ModalConfirmAction({
  isOpen,
  onClose,
  onCloseComplete,
  message,
  heading,
  onCancel,
  onSuccess,
  confirmBtnText,
  cancelBtnText,
}: Props) {
  function confirmAction() {
    onSuccess();
    onClose();
  }

  function cancelAction() {
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={cancelAction}
      onCloseComplete={onCloseComplete}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{heading ?? "Confirm action"}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{message}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => confirmAction()}>
            {confirmBtnText ?? "Yes"}
          </Button>
          <Button variant="ghost" onClick={cancelAction}>
            {cancelBtnText ?? "Cancel"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
