import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from '../../pages/api/api';

interface CountryProps {
  city: string;
  country: string;
  photoCity: string;
  flag: string;
}

interface Country {
  id: number;
  city: string;
  country: string;
  photoCity: string;
  flag: string;
}

export default function City() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    api.get(`/countries/`).then(response => {
      setCountries(response.data)
    });
  }, []);

  // useEffect(() => {
  //   async function loadCountries() {
  //     const response = await api.get('/countries');
  //     setCountries(response.data);
  //     // console.log(response.data)
  //   }
  //   loadCountries();
  // }, []);

  return (
    <>
      {countries.map(countr => (
        <Box key={countr.id} borderRadius="4px" overflow="hidden">
          <Image src={`/${countr.photoCity}.jpg`} h="173px" w="100%" objectFit="cover" />
          <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0" >
            <Flex direction="column">
              <Heading fontSize="xl" fontWeight="600">{countr.city}</Heading>
              <Text mt="3" fontSize="md" fontWeight="500" color="gray.500">{countr.country}</Text>
            </Flex>
            <Image src={`/${countr.flag}.jpg`} h="30px" w="30px" borderRadius="50%" objectFit="cover" />
          </Flex>
        </Box>
      ))}
    </>
  )
}