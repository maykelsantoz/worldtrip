import { Grid, GridItem, Heading } from "@chakra-ui/react"
import Info from "./Info"

export default function Infotravel() {
  return (
    <Grid
      w="100%"
      templateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
      justifyContent="space-between"
      alignItems="center"

      // mx="auto"
      // maxW="400px"
      gap={[1, 15]}
    >
      <GridItem>
        <Heading w="600px" textAlign="justify" color="gray.700" fontWeight="400" lineHeight="9" mr="6" fontSize={["xl", "2l", "2xl"]}>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Heading>
      </GridItem>

      <GridItem>
        <Info description="50" title="países" />
      </GridItem>
      <GridItem>
        <Info description="60" title="línguas" />
      </GridItem>
      <GridItem>
        <Info description="27" title="cidades +100" />
      </GridItem>
    </Grid>
  )
}

