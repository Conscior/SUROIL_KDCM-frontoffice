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
  Center,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoBusinessOutline,
  IoHomeOutline,
  IoStorefrontOutline,
  IoCarOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
import Partners from "./Partners";

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

const BestSellerCard = ({ img, category, name, price }) => {
  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      p={6}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}>
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${img})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}>
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={img}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {category}
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {name}
        </Heading>
        <VStack>
          <Button>Ajouter au panier</Button>
          <Button
            variant={"link"}
            color='suroilGreen.100'
            _hover={{ color: "suroilGreen.200" }}
            _active={{ color: "suroilGreen.100" }}>
            Demander un devis
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

const CategoryCard = ({ img, category }) => {
  return (
    <Box
      as={motion.div}
      initial={cardMotion.offscreen}
      whileInView={cardMotion.onscreen}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      w={"full"}
      alignItems='center'
      justifyContent={"center"}>
      <Flex
        w={"full"}
        h={"60vh"}
        backgroundImage={`url(${img})`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        alignItems='center'
        justifyContent={"center"}
        align='center'
        alignContent={"center"}
        alignSelf='center'
        justifyItems={"center"}
        justify='center'
        justifySelf={"center"}
        borderRadius='xl'>
        <Center
          as={Heading}
          w='80%'
          minH='20%'
          textAlign='center'
          color='suroilWhite'
          border='3px solid #ED444B'
          backgroundColor={"rgba(0,0,0, 0.4)"}
          backdropFilter='blur(8px)'>
          {category}
        </Center>
      </Flex>
    </Box>
  );
};

const Features = () => {
  return (
    <>
      {/* First Feature */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        px='10'
        py='10'
        fontFamily={"body"}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"suroilRed.500"}
            fontWeight={600}
            fontSize={"xl"}
            bg={"suroilWhite"}
            p={2}
            alignSelf={"flex-start"}
            borderRadius={"3xl"}>
            Qui sommes nous
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
        <AspectRatio ratio={16 / 9}>
          <iframe
            src='https://www.youtube.com/embed/OYa_SQYZDj4'
            title="The ISTOBAL T'WASH30 at the Israeli supermarket chain Hatzi Hinam, by Oz Bat Galim"
            allowFullScreen
          />
        </AspectRatio>
      </SimpleGrid>

      {/* Second feature */}
      {/* <SimpleGrid
        as={motion.div}
        initial={cardMotion.offscreen}
        whileInView={cardMotion.onscreen}
        viewport={{ once: true }}
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 4, lg: 12 }}
        placeItems='center'
        alignItems={"start"}
        px={{ base: 12, sm: 24, md: 6, lg: 24 }}
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
            borderTopColor={"suroilRed.600"}>
            <Flex
              p={2}
              w='max-content'
              color='white'
              bgColor={"suroilRed.600"}
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
      </SimpleGrid> */}
      <VStack bg={"suroilRed.500"} py='10'>
        <Heading color={"suroilWhite"}>Nos Bestsellers</Heading>
        <SimpleGrid
          as={motion.div}
          initial={cardMotion.offscreen}
          whileInView={cardMotion.onscreen}
          viewport={{ once: true }}
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 12, lg: 12 }}
          placeItems='center'
          alignItems={"start"}
          px={{ base: 12, sm: 24, md: 6, lg: 24 }}
          py='10'>
          <BestSellerCard
            img='https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            category='Categorie 1'
            name={"Produit 1"}
          />
          <BestSellerCard
            img='https://images.unsplash.com/photo-1550963295-019d8a8a61c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            category='Categorie 2'
            name={"Produit 2"}
          />
          <BestSellerCard
            img='https://images.unsplash.com/photo-1584792286782-a5dc95dc2250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
            category='Categorie 3'
            name={"Produit 3"}
          />
        </SimpleGrid>
      </VStack>

      {/* Third feature */}
      {/* <Box
        py={20}
        bg='red.800'
        bgGradient={"linear(to-r, red.700, red.900)"}
        color={"white"}>
        <Stack spacing={16} as={Container} maxW={"100%"} textAlign={"center"}>
          <Heading
            fontSize={{
              base: "2xl",
              sm: "3xl",
              md: "2lg",
              lg: "3xl",
              xl: "4xl",
              "2xl": "9xl",
            }}>
            Commercialisation des équipements professionnels <br /> de nettoyage
            et de garage
          </Heading>
          <Text
            fontSize={{
              base: "sm",
              sm: "3xl",
              md: "md",
              lg: "xl",
              xl: "xl",
              "2xl": "6xl",
            }}
            textAlign={"justify"}>
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
      </Box> */}

      {/* Nos produits */}
      <VStack py='10'>
        <Heading
          fontSize='xl'
          color='suroilRed.500'
          bg='#EBE6DF'
          p='1.5'
          borderRadius={"3xl"}
          border={"2px solid #EBE6DF"}>
          Nos produits
        </Heading>
        <Heading color='suroilRed.500'>
          Découvrez nos differents produits
        </Heading>
        <SimpleGrid
          as={motion.div}
          initial={cardMotion.offscreen}
          whileInView={cardMotion.onscreen}
          viewport={{ once: true }}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 12, lg: 12 }}
          w='100%'
          placeItems='center'
          alignItems={"start"}
          px={{ base: 12, sm: 24, md: 6, lg: 24 }}
          py='10'>
          <CategoryCard
            category={"Nettoyage"}
            img='https://images.unsplash.com/photo-1580256081112-e49377338b7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          />
          <CategoryCard
            category={"Garage"}
            img='https://images.unsplash.com/photo-1632685062337-095b722134ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          />
          <CategoryCard
            category={"Station de graissage mobile"}
            img='https://www.ravasini.fr/wp-content/uploads/2015/02/LUBRI_03.jpg'
          />
          <CategoryCard
            category={"Portique et tunnel de lavage automatique"}
            img='https://www.tecnolec-lavages.com/img/photo_produit-8-13-o.jpg'
          />
        </SimpleGrid>
      </VStack>

      {/* Fourth Feature */}
      {/* <VStack
        as={motion.div}
        initial={cardMotion.offscreen}
        whileInView={cardMotion.onscreen}
        viewport={{ once: true }}
        py='10'
        px={10}>
        <Heading>x</Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          placeItems='center'
          spacing={20}>
          {features.map((feature, index) => (
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
      </VStack> */}

      <Divider />

      <Partners />
    </>
  );
};

export default Features;
