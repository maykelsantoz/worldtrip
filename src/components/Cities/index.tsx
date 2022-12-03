import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={["20px", "45px"]} alignItems="center" justifyContent="center" px={["30px", "0"]} >
        <City city="londres" country="Reino Unido" photoCity="londres" flag="londres_flag" />
        <City city="paris" country="França" photoCity="paris" flag="paris_flag" />
        <City city="roma" country="Itália" photoCity="roma" flag="roma_flag" />
        <City city="praga" country="República Tcheca" photoCity="praga" flag="praga_flag" />
        <City city="amsterda" country="Holanda" photoCity="amsterda" flag="amsterda_flag" />
      </Grid>
    </>
  )
}