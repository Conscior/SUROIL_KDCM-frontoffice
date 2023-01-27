import {
  Box,
  Stack,
  Flex,
  Button,
  Heading,
  Text,
  VStack,
  AspectRatio,
  useBreakpointValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Partners = () => {
  return (
    <VStack py='10'>
      <Heading fontSize="md" color="suroilRed.500" bg="#EBE6DF" p="1.5" borderRadius={"3xl"} border={"2px solid #EBE6DF"}>
        Nos Partenaires
      </Heading>
      <Heading color='suroilRed.500'>Ils nous font confiance</Heading>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        style={{ height: "150px", width: "80%" }}>
        <SwiperSlide style={{ padding: "0 50px 0 50px" }}>
          <SimpleGrid
            columns={{ base: 1, sm: 4, md: 6 }}
            placeItems='center'
            spacing={10}
            mb={4}>
            <Box>
              <Image
                src='https://suroilkdcm.com/wp-content/uploads/2021/01/mtd.png'
                alt='MTD'
              />
            </Box>
            <Box>
              <Image
                src='https://suroilkdcm.com/wp-content/uploads/2021/01/fiorentini.jpg'
                alt='Fiorentini'
              />
            </Box>
            <Box>
              <Image
                src='https://suroilkdcm.com/wp-content/uploads/2021/01/filmop.jpg'
                alt='Filmop'
              />
            </Box>
            <Box>
              <Image
                src='https://suroilkdcm.com/wp-content/uploads/2021/01/filmop.jpg'
                alt='Filmop'
              />
            </Box>
            <Box>
              <Image
                src='https://suroilkdcm.com/wp-content/uploads/2021/01/filmop.jpg'
                alt='Filmop'
              />
            </Box>
            <Box>
              <Image
                src='https://suroilkdcm.com/wp-content/uploads/2021/01/filmop.jpg'
                alt='Filmop'
              />
            </Box>
          </SimpleGrid>
        </SwiperSlide>
      </Swiper>
    </VStack>
  );
};

export default Partners;
