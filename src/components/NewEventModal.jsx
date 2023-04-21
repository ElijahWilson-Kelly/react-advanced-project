import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { NewEventForm } from "./NewEventForm";

export const NewEventModal = ({
  isOpen,
  onClose,
  categoriesData,
  formData = {},
  onSubmit,
  id,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" size="xl">
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>New Event</ModalHeader>
        <ModalCloseButton color="white" border="1px solid white" />
        <ModalBody>
          <NewEventForm
            categoriesData={categoriesData}
            formData={formData}
            onClose={onClose}
            onSubmit={onSubmit}
            id={id}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
