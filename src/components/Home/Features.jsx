import {
  chakra,
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
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoBusinessOutline,
  IoHomeOutline,
  IoStorefrontOutline,
  IoCarOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

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
    text: "D'un atelier pour la petite maintenance d'une superficie de 50 m2. De deux Locaux de stockage de 500 m2.",
    icon: IoHomeOutline,
  },
  {
    id: 3,
    title: "Showroom",
    text: "D'un showroom de 200 m2.",
    icon: IoStorefrontOutline,
  },
  {
    id: 4,
    title: "Véhicules",
    text: "5 véhicules de services.",
    icon: IoCarOutline,
  },
];

const secondFeatures = [
  {
    title: "Qualité garantie",
    text: "La qualité de nos produits est constamment contrôlée et garantie selon les normes de l'industrie. Avec nous, vous serez en sécurité.",
    icon: IoAnalyticsSharp,
  },
  {
    title: "Lorem",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, at quam. Assumenda facere cumque mea.",
    icon: IoAnalyticsSharp,
  },
  {
    title: "Lorem2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, at quam. Assumenda facere cumque mea.",
    icon: IoAnalyticsSharp,
  },
];

const cardMotion = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Features = () => {
  return (
    <>
      {/* First Feature */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px='10' py='10'>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            fontSize={"xl"}
            bg={"primary"}
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
        </Stack>
        {/* <Flex width={"100%"} border='2px solid red'>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://gachemicalsrls.com/img/intro-bg.png"
              // "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
          
        </Flex> */}
        <AspectRatio ratio={16/9}>
          <iframe
            src='https://www.youtube.com/embed/OYa_SQYZDj4'
            title="The ISTOBAL T'WASH30 at the Israeli supermarket chain Hatzi Hinam, by Oz Bat Galim"
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </AspectRatio>
      </SimpleGrid>

      {/* Second feature */}
      <SimpleGrid
        as={motion.div}
        initial={cardMotion.offscreen}
        whileInView={cardMotion.onscreen}
        viewport={{ once: true }}
        columns={{ base: 1, md: 3 }}
        spacing={10}
        placeItems='center'
        textAlign='center'
        px='40'
        py='10'
        // bgGradient={"linear(to-r, suroil.primary, kdcm.primary)"}
      >
        {secondFeatures.map((feature, index) => (
          <Box
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            key={index}
            bg={"red.50"}
            p={6}
            rounded='lg'
            textAlign='center'
            pos='relative'
            borderTop={"10px solid"}
            borderTopColor={"suroil.primary"}>
            <Flex
              p={2}
              w='max-content'
              color='white'
              bgColor={"suroil.primary"}
              // bgGradient='linear(to-br, #228be6, #15aabf)'
              // bgGradient={"linear(to-r, suroil.primary, kdcm.primary)"}
              rounded='md'
              marginInline='auto'
              pos='absolute'
              left={0}
              right={0}
              top={-8}
              boxShadow='lg'>
              <Icon as={feature.icon} w={12} h={12} />
            </Flex>
            <chakra.h3 fontWeight='semibold' fontSize='2xl' mt={6}>
              {feature.title}
            </chakra.h3>
            <Text fontSize='md' mt={4}>
              {feature.text}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Third feature */}
      <Box
        py={20}
        bg='red.800'
        bgGradient={"linear(to-r, red.700, red.900)"}
        color={"white"}>
        <Stack spacing={16} as={Container} maxW={"80%"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>
            Commercialisation des équipements professionnels <br /> de nettoyage
            et de garage
          </Heading>
          <Text fontSize={"xl"} textAlign={"justify"}>
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
      </Box>

      {/* Fourth Feature */}
      <Container
        as={motion.div}
        initial={cardMotion.offscreen}
        whileInView={cardMotion.onscreen}
        viewport={{ once: true }}
        maxW={"80%"}
        py={20}
        px={{ base: 5, md: 10 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          placeItems='center'
          spacing={20}>
          {features.map((feature, index) => (
            // <HStack key={feature.id} align={"center"}>
            //   <Box>
            //     <Icon as={feature.icon} boxSize={14} />
            //   </Box>
            //   <VStack align={"start"}>
            //     <Text fontWeight={600}>{feature.title}</Text>
            //     <Text color={"gray.600"}>{feature.text}</Text>
            //   </VStack>
            // </HStack>
            <Box
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              key={index}
              textAlign='center'>
              <Icon as={feature.icon} w={10} h={10} />
              <chakra.h3 fontWeight='semibold' fontSize='2xl'>
                {feature.title}
              </chakra.h3>
              <Text fontSize='md'>{feature.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Features;