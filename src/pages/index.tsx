import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner"
import Menutravel from "../components/Menutravel";
import Separator from "../components/Separator";
import Carrousel from "../components/Carrousel";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Menutravel />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
        mb={["5", "14"]}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Carrousel />
    </Flex>
  )
}