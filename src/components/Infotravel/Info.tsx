import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react"
import { RiInformationLine } from "react-icons/ri";

interface MenuProps {
  description: string;
  title: string;
}

export default function Menu() {
  return (
    <Flex align="center" justify="space-between">
      <Flex direction={["column"]} align={["flex-start", "flex-start", "center"]} justify="center">
        <Heading color="yellow.400" fontWeight="600" fontSize={["2xl", "5xl"]}>50</Heading>
        <Text color="gray.700" fontWeight="600" fontSize={["md", "xl", "2xl"]}>países</Text>
      </Flex>
      <Flex direction={["column"]} align={["flex-start", "flex-start", "center"]} justify="center">
        <Heading color="yellow.400" fontWeight="600" fontSize={["2xl", "5xl"]}>60</Heading>
        <Text color="gray.700" fontWeight="600" fontSize={["md", "xl", "2xl"]}>línguas</Text>
      </Flex>
      <Flex direction={["column"]} align={["flex-start", "flex-start", "center"]} justify="center">
        <Heading color="yellow.400" fontWeight="600" fontSize={["2xl", "5xl"]}>27</Heading>
        <Text color="gray.700" fontWeight="600" fontSize={["md", "xl", "2xl"]}>
          cidades +100
          {/* <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "20px"]} h={["10px", "20px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Paris, França, Alemanha, Inglaterra
              </PopoverBody>
            </PopoverContent>
          </Popover> */}
        </Text>
      </Flex>
    </Flex>
  )
}