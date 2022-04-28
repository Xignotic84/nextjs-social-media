import {Box, Skeleton, Td, Tr} from "@chakra-ui/react";
import {useState} from "react";


export default function Trade({trade}) {
  const [loadState, setLoadState] = useState(false);

  setTimeout(() => {
    setLoadState(true)
  }, 2500)

  return <Box isLoaded={true}>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
    </Tr>
  </Box>
}