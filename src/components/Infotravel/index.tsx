import { Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import Info from "./Info"

export default function Infotravel() {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text textAlign="justify" color="gray.700" fontWeight="400" lineHeight="9" fontSize={["lg", "xl", "xl", "2xl"]}>
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>

      <Info description="50" title="países" />
    </Grid>
  )
}

