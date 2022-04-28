import {
  Button, Image,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";

export default function ThumbnailModal({post}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <>
        <Image
            cursor={"pointer"}
            onClick={onOpen}
            borderRadius={10}
            mt={5}
            src={post.thumbnailURL}
            alt={post.title}
        />
        <Modal
            size={"xl"}
            bg={"red"}
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent
              background={"background.pr"}
          >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                  onClick={onOpen}
                  borderRadius={10}
                  mt={5}
                  src={post.thumbnailURL}
                  alt={post.title}
              />
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}