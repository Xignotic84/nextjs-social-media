import {
  Avatar,
  Button, Heading, Image,
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
            borderRadius={5}
            mt={2}
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
              background={"gray.800"}
          >
            <ModalHeader display={"flex"} pb={1} pt={3}>
              <Avatar
                size={"sm"}
                borderRadius={"100%"}
                name={post.username}
                src={post.avatarURL}
              />
              <Heading ml={3} fontSize={25}>
                {post.username}
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody mb={3}>
              <Image
                  onClick={onOpen}
                  borderRadius={5}
                  size={"xl"}
                  src={post.thumbnailURL}
                  alt={post.title}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
  )
}