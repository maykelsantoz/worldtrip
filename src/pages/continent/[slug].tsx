// import { Flex } from "@chakra-ui/react";
import { Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import Header from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner";
import Menu from "../../components/Menutravel/Menu";
import Infotravel from "../../components/Infotravel";
import Cities from "../../components/Cities";

export default function Continent() {
  return (
    <Flex direction="column" mb="35px">
      <Header />
      <ContinentBanner />

      <Flex
        direction="column" mx="auto" maxW="1160px" px="1rem"
      >
        <Infotravel />
        <Cities />
      </Flex>
    </Flex>
  )
}