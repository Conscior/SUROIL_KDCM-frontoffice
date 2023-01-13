import { Box, VStack, SimpleGrid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContactForm from "../components/Contact/ContactForm";
import ContactMap from "../components/Contact/ContactMap";

const Contact = () => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      borderRadius='lg'
      m={{ base: 5, md: 16, lg: 10 }}
      p={{ base: 5, lg: 10 }}>
      <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
        <Heading
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}>
          Contactez nous !
        </Heading>
        <SimpleGrid
          w={"100%"}
          columns={{ base: "1", lg: "2" }}
          columnGap={{ sm: "4", md: "6", lg: "4" }}
          rowGap={{ base: "8", md: "10" }}>
          <ContactForm />
          <ContactMap />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Contact;
