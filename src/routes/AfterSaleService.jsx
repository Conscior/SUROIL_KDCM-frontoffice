import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

import AfterSaleServiceForm from "../components/AfterSaleService/AfterSaleServiceForm";
import AfterSaleServiceHeader from "../components/AfterSaleService/AfterSaleServiceHeader";

const AfterSaleService = () => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      pt='8'
      textAlign={"center"}
      justifySelf={"center"}
      alignSelf='center'
      alignContent={"center"}
      alignItems='center'
      justifyContent={"center"}
      justifyItems='center'>
      {/* Header */}
      <AfterSaleServiceHeader />

      {/* Forms */}
      <Center width={"100%"}>
        <Box
          width={{ base: "95%", lg: "70%" }}
          borderRadius='lg'
          shadow='base'
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 10 }}>
          <AfterSaleServiceForm />
        </Box>
      </Center>
    </Box>
  );
};

export default AfterSaleService;
