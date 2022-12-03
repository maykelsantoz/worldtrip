import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

interface MenuProps {
  icon: string;
  title: string;
}


export default function Menu({ icon, title }: MenuProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? <Image src={`/${icon}.svg`} w="85px" h="85px" mb="6" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
      <Text color="gray.700" fontWeight="600" fontSize={["md", "xl", "2xl"]} mr="2">{title}</Text>
    </Flex>
  )
}