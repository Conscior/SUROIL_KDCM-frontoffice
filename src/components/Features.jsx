import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoBusinessOutline,
  IoCarOutline,
  IoMapOutline,
} from "react-icons/io5";

const features = [
  {
    id: 1,
    title: "Bureaux",
    text: "De bureaux administratifs sur une superficie de 200 m2 regroupant le personnel administratif et les gestionnaires.",
    icon: IoBusinessOutline,
  },
  {
    id: 2,
    title: "Locaux",
    text: "D'un atelier pour la petite maintenance d'une superficie de 50 m2. . De deux Locaux de stockage de 500 m2.",
    icon: IoBusinessOutline,
  },
  {
    id: 3,
    title: "Showroom",
    text: "D’un showroom de 200 m2.",
    icon: IoBusinessOutline,
  },
  {
    id: 4,
    title: "Véhicules",
    text: "05 véhicules de services.",
    icon: IoCarOutline,
  },
];

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <>
      {/* <Container maxW={"5xl"} py={12}> */}
      <SimpleGrid py={12} columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"xl"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}>
            Qui sommes nous?
          </Text>
          <Heading>Fournisseur d'équipements de Nettoyage et de garage</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Sarl K.D.C.M est le premier fournisseur d'équipements de Nettoyage
            et de garage en algérie ; Créée en 1994, elle est spécialisée dans
            l'importation. <br />
            El-Ghani METTOUCHI. PDG de KDCM commercialisation des équipements
            professionnels de nettoyage et de garage, est distributeur exclusif
            en Algérie de grandes marques reconnues mondialement, entrain de
            jouer un rôle très important pour donner des solutions adéquate pour
            un nettoyage efficace dans tous les domaines. sise à Bouzeguène
            centre, Wilaya de Tizi-Ouzou, elle est représentée par son Directeur
            Général Monsieur El-Ghani METTOUCHI. <br />
            Aujourd’hui, avec plus de dix années d’existence leader dans son
            activité grâce à l’expérience de ces professionnels qui se
            distinguent par leurs compétences et leurs sérieux,. Plus d’une
            vingtaine d’employés, qualifiés d’assurer une bonne gestion et une
            meilleure organisation. <br />
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }>
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Business Planning"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Financial Planning"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Market Analysis"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      {/* </Container> */}

      {/* Second feature */}
      <Box py={4}>
        <Stack spacing={4} as={Container} maxW={"80%"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>
            Commercialisation des équipements professionnels <br /> de nettoyage
            et de garage
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"} textAlign={"justify"}>
            KDCM est Créée dans le but de répondre aux exigences de la clientèle
            en matière d'équipements de nettoyage et de graissage, elle s'est
            vite intéressée à la distribution et dans le but d'agrandir son
            réseau de distribution, et de se rapprocher du pôle économique,
            Monsieur METTOUCHI, créa en 2005 la Sarl SUROIL Equipements à Alger
            Elle est spécialisée dans la commercialisation des équipements
            professionnels de nettoyage et de garage, sise à Colline El Zina -
            Bab Ezzouar.
          </Text>
        </Stack>

        <Container maxW={"80%"} mt={10}>
          <Heading textAlign='center' fontSize={"3xl"} mb={5}>
            Title
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={"center"}>
                <Box>
                  <Icon as={feature.icon} boxSize={14} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Features;
