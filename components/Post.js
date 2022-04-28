import {Avatar, Box, Heading, Image, Skeleton, Text, Tooltip} from "@chakra-ui/react";
import ThumbnailModal from "./ThumbnailModal";
import {useState} from "react";

export default function Post({post}) {
  const [loadState, setLoadState] = useState(false);

  setTimeout(() => {
    setLoadState(true)
  }, 2000)

  return <Skeleton position={"relative"} borderRadius={4} isLoaded={loadState} m={3} w={550} p={4} bg={"gray.700"}>
    <Box display={"flex"}>
      <Avatar
          size={"sm"}
          borderRadius={"100%"}
          name={post.username}
          src={post.avatarURL}
      />
      <Heading ml={3} fontSize={25}>
        {post.username}
      </Heading>
      <Box>
        <Text position={"absolute"} top={0} right={3} cursor={"pointer"} fontSize={"20px"}>
          ...
        </Text>
      </Box>
    </Box>
    <Text mt={5} color={"gray.400"} display={"flex"} justifyContent={"flex-end"}>
      {post.description}
    </Text>
    <ThumbnailModal post={post}/>
  </Skeleton>
}