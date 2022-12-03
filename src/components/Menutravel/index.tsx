import { Grid, GridItem } from "@chakra-ui/react"
import Menu from "./Menu"

export default function Menutravel() {
  return (
    <Grid
      w="100%"
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Menu icon="cocktail" title="vida noturna" />
      </GridItem>
      <GridItem>
        <Menu icon="surf" title="praia" />
      </GridItem>
      <GridItem>
        <Menu icon="building" title="moderno" />
      </GridItem>
      <GridItem>
        <Menu icon="museum" title="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Menu icon="earth" title="e mais..." />
      </GridItem>
    </Grid>
  )
}



