import { Box, Heading, Text, SimpleGrid, Stack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AfterSaleServiceHeader = () => {
  return (
    <>
      <Box px={8}>
        <Heading mb={4}>Service après vente</Heading>
        <Text fontSize='xl'>
          Un service après vente (SAV) de qualité, une disponibilité de pièces
          de rechange et un atelier de réparation répondant à juste titre à
          l'ensemble des interventions de tous les équipements commercialisés
          par notre entité.
        </Text>
      </Box>
      <Box p={8}>
        <Heading mb={4} textAlign='center'>
          Nos valeurs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack as={motion.div} whileHover={{ scale: 1.1 }} align={"center"}>
            <Image
              src='https://suroilkdcm.com/wp-content/uploads/2021/03/2.png'
              alt="Piéce d'origines"
            />
            <Text fontWeight={600}>Piéce d'origines</Text>
            <Text color={"gray.600"} w='80%' align={"center"}>
              Nous utilisons la pièce détachée originale pour vous garantir la
              meilleure qualité de réparation.
            </Text>
          </Stack>
          <Stack as={motion.div} whileHover={{ scale: 1.1 }} align={"center"}>
            <Image
              src='https://suroilkdcm.com/wp-content/uploads/2021/03/download-1.png'
              alt='Personnel qualifié'
            />
            <Text fontWeight={600}>Personnel qualifié</Text>
            <Text color={"gray.600"} align={"center"}>
              Nos techniciens sont formés pour chaque marque.
            </Text>
          </Stack>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AfterSaleServiceHeader;
