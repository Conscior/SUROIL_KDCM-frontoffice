import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

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
      // className='mySwiper'
      style={{ height: "700px", width: "100%"}}>
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
