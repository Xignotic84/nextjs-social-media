import {Avatar, Badge, Box, Button, Flex, Heading, Skeleton, Text} from "@chakra-ui/react";
import {useState} from "react";
import MenuButton from "./MenuButton";
import {AtSignIcon, ChatIcon, Search2Icon, SettingsIcon} from "@chakra-ui/icons";



export default function Profile({profile}) {
  const [loadState, setLoadState] = useState(false);

  setTimeout(() => {
    setLoadState(true)
  }, 1500)

  return <Box w={300} p={5} position={"fixed"} flexDirection={"column"}>
    <Flex>
      <Skeleton isLoaded={loadState} display={"inline-flex"}>
        <Avatar
            src={profile.avatarURL}
            name={profile.username}
            size={"md"}
        />
        <Box ml='3'>
          <Heading fontWeight='bold' fontSize={26} isTruncated>
            {profile.username}
          </Heading>
          <Text isTruncated w={200} fontSize='md' color={"gray.400"}>{profile.jobTitle}</Text>
        </Box>
      </Skeleton>
    </Flex>
    <Box mt={5} display={"flex"} flexDirection={"column"}>
      <MenuButton isSelected={true} text={"Home"} icon={<AtSignIcon />}/>
      <MenuButton text={"Explore"} icon={<Search2Icon />}/>
      <MenuButton text={"Chats"} icon={<ChatIcon />}/>
      <MenuButton text={"Settings"} icon={<SettingsIcon />}/>
    </Box>
  </Box>
}