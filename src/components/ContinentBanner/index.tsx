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
    >
      <Heading textAlign={["center", "left"]} color="gray.100" fontWeight="600" fontSize={["1.75rem", "5xl"]}>
        Europa
      </Heading>
    </Flex >
  )
}