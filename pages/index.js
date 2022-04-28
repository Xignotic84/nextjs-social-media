import {
  Box,
  Center,
  SimpleGrid,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs, Tbody, Th, Thead, Tr
} from "@chakra-ui/react";
import Post from "../components/Post";
import Profile from "../components/Profile";
import config from './../config.json'
import CreatePost from "../components/CreatePost";
import Trade from "../components/Trade";
import Trades from "../components/Trades";

export async function getServerSideProps(context) {
  let userData = await fetch(`${config.api.baseURL}/user`)
  userData = await userData.json()

  const postsData = await fetch(`${config.api.baseURL}/posts`).then(async res => {
    return await res.json()
  })

  return {
    props: {user: userData, posts: postsData.posts}
  }
}


export default function Home({user, posts}) {
  return (
      <Box mt={50}>
        <Profile profile={user}/>
        <Center mt={15} display={"flex"} flexDirection={"column"}>
          <CreatePost/>
          <SimpleGrid p={3}>
            {posts.map(post => {
              return <Post post={post}/>
            })}
          </SimpleGrid>
        </Center>
      <Trades/>

      </Box>
  )
}
