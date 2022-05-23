import {Button, Text} from "@chakra-ui/react";

export default function FeaturedTag({tag}) {
  return (
    <Button justifyContent={"flex-start"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} w={250} h={65} mb={4}>
      <Text fontSize={10} color={"gray.500"}>
        {tag.header}
      </Text>
      <Text>
        # {tag.text}
      </Text>
    </Button>
  )
}