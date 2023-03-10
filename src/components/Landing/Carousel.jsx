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
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Carousel = () => {
  const cards = [
    "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      style={{ height: "700px", width: "100%" }}>
      <SwiperSlide>
        <Flex
          w={"full"}
          h={"100vh"}
          backgroundImage={"url(https://gachemicalsrls.com/img/intro-bg.png)"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}>
          <VStack
            w={"full"}
            justify={"center"}
            alignItems='start'
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
            <Stack align={"flex-start"} spacing={6} pl='10%'>
              <Heading color={"white"}>SUROIL KDCM</Heading>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
                Leader dans son domaine depuis 1994
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </SwiperSlide>
      {cards.map((imgUrl, index) => (
        <SwiperSlide key={index}>
          <Box
            height={"6xl"}
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${imgUrl})`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
