import {Box, Button, Text, Textarea} from "@chakra-ui/react";
import {useState} from "react";

export default function CreatePost({post}) {

  const [charCount, setCharCount ] = useState(0)

  return <Box position={"relative"} w={550} p={4} borderRadius={4} bg={"gray.700"}>
    <Textarea mb={8} placeHolder={"State your mind..."} onChange={e => setCharCount(e.target.value.length)}/>
    <Text position={"absolute"} bottom={4} left={5} color={"gray.400"}>
      {charCount}/300
    </Text>
    <Button position={"absolute"} size={"sm"} bottom={3} right={5}>
      Post
    </Button>
  </Box>
}