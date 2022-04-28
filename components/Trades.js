import {Box, Skeleton, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useState} from "react";
import Trade from "./Trade";

export default function Trades() {
  return <TableContainer display={"flex"} position={"fixed"} right={100} top={50} p={5}>
    <Table variant='striped' colorScheme='gray' w={60} size='md'>
      <Thead>
        <Tr>
          <Th>Account</Th>
          <Th>Amount</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
}