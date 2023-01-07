import {
  Box,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  AspectRatio,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Carousel = () => {
  const cards = [
    "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
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
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor
              </Text>
              <Stack direction={"row"}>
                <Button
                  bg={"primary"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}>
                  Action
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <AspectRatio ratio={"16/9"}>
          <iframe
            src='https://www.youtube.com/embed/D0UnqGm_miA'
            title='Dummy Video For Website'
            allowFullScreen
          />
        </AspectRatio>
      </SwiperSlide>
      {cards.map((imgUrl, index) => (
        <SwiperSlide key={index}>
          {/* <img src={imgUrl} /> */}
          <Box
            // key={index}
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
