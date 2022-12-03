import { Flex, Heading, Image, Text } from "@chakra-ui/react"

export default function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "80"]}
      bgImage="url('/europebanner.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
      mx="auto"
      maxW="1440px"
    // maxW="1440px"
    // mx="auto"
    // textAlign="center"
    // bgPosition="center"

    >
      {/* <Flex
        justify={['center', 'space-between']} align="center" w="100%" mx="auto" px={["4", "10", "15", "20", "36"]}
      >
        <div> */}
      <Heading textAlign={["center", "left"]} color="gray.100" fontWeight="600" fontSize={["1.75rem", "5xl"]}>
        Europa
      </Heading>
      {/* <Text color="gray.300" mt="5" fontSize={["0.8rem", "xl"]} maxW={["100%", "100%", "100%", "550px"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text> */}
      {/* </div> */}

      {/* <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/airplane.svg"
          alt="airplane"
          transform="translateY(48px)"
          ml="8"
        /> */}

      {/* </Flex> */}
    </Flex >
  )
}