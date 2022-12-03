import { Flex, Grid, Icon, Image } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Link from "next/link"
// import { RiArrowLeftSLine } from "react-icons/ri"
import { MdOutlineArrowBackIos } from "react-icons/md"

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" h={["50px", "100px"]} align="center" justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >

        {notHomePage && (
          <Link href="/">
            <Icon as={MdOutlineArrowBackIos} fontSize={[15, 20]} justifySelf="start" fontWeight="bold" />
          </Link>)}
        <Image
          w={["81px", "184px"]}
          src="/logo.svg"
          alt="worldtrip"
          justifySelf="center"
          gridColumn="2"
        />

      </Grid>
    </Flex>
  )
}