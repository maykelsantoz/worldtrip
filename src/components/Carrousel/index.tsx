import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link";

import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carrousel() {
  return (
    <Flex
      maxW="1240px"
      mx="auto"
      w="100%"
      h={["250px", "450px"]}
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/riodejaneiro.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/america">
              <Heading color="gray.100" fontWeight="700" fontSize={["3xl", "4xl", "5xl"]}>
                América
              </Heading>
              <Text color="gray.300" fontWeight="700" mt="4" fontSize={["0.875rem", "1xl", "2xl"]} >
                O continente mais novo.
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/europe.jpg')"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <Heading color="gray.100" fontWeight="700" fontSize={["3xl", "4xl", "5xl"]}>
                Europa
              </Heading>
              <Text color="gray.300" fontWeight="700" mt="4" fontSize={["0.875rem", "1xl", "2xl"]} >
                O continente mais antigo.
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}