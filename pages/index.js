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
  Tabs, Tbody, Th, Thead, Tr,
  Wrap,
  Heading
} from "@chakra-ui/react";
import config from './../config.json'
import Post from "../components/Post";
import FeaturedTag from "../components/FeaturedTag";
import Profile from "../components/Profile";
import CreatePost from "../components/CreatePost";

export async function getServerSideProps(context) {
  let userData = await fetch(`${config.api.baseURL}/user`)
  userData = await userData.json()

  const postsData = await fetch(`${config.api.baseURL}/posts`).then(async res => {
    return await res.json()
  })

  const featuredTags = await fetch(`${config.api.baseURL}/tags`).then(async res => {
    return await res.json()
  })

  return {
    props: {user: userData, posts: postsData.posts, tags: featuredTags.tags}
  }
}


export default function Home({user, posts, tags}) {
  return (
      <Wrap mt={50} display={"flex"} justifyContent={"center"} >
        <Profile profile={user}/>
        <Box m={"0 auto"}>
          <CreatePost/>
          <SimpleGrid>
            {posts.map(post => {
              return <Post post={post}/>
            })}
          </SimpleGrid>
        </Box>
        <SimpleGrid display={"flex"} flexDirection={"column"} p={2}>
          <Box>
            <Heading fontSize={27} mb={3}>
              Trending Tags
            </Heading>
          </Box>
          {tags.map(tag => {
            return <FeaturedTag tag={tag}/>
          })}
        </SimpleGrid>
      </Wrap>
  )
}
