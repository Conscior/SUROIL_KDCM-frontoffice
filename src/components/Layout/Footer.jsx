import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

import { ReactComponent as SUROIL } from "../../assets/SUROIL.svg";
import { ReactComponent as KDCM } from "../../assets/KDCM.svg";

import { Link as ReachLink } from "react-router-dom";

const socialLinks = [
  {
    title: "Facebook",
    link: "www.facebook.com",
    icon: IoLogoFacebook,
  },
  { title: "Instagram", link: "www.instagram.com", icon: IoLogoInstagram },
  { title: "Twitter", link: "www.twitter.com", icon: IoLogoTwitter },
];

const Footer = () => {
  return (
    <Box
      as='footer'
      width={"100%"}
      bg='#1F7C48'
      color={"white"}
      borderTop='1px solid'
      borderColor=' .300'
      p={{ base: 5, md: 8 }}
      mt={4}
      marginInline='auto'>
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent='space-between'
        direction={{ base: "column", md: "row" }}>
        <Box maxW='300px' alignSelf='center'>
          <HStack justify={"center"} align={"center"}>
            <SUROIL />
            <KDCM />
          </HStack>
          <Text mt={2} fontSize='md'>
            Leader dans son domaine depuis 1994
          </Text>
        </Box>
        <HStack
          spacing={4}
          d={{ base: "none", sm: "flex" }}
          justifyContent={{ sm: "space-between", md: "normal" }}
          alignItems={"start"}>
          <Link as={ReachLink} fontSize='md' fontWeight='bold'>
            Présentation
          </Link>

          <VStack spacing={4} alignItems='flex-start'>
            <Text fontSize='md' fontWeight='bold'>
              Produits
            </Text>
            <VStack spacing={2} alignItems='flex-start' color='gray.300' >
              <Link as={ReachLink} to='/produits'>
                Nos produits
              </Link>
            </VStack>
          </VStack>

          <VStack spacing={4} alignItems='flex-start'>
            <Text fontSize='md' fontWeight='bold'>
              Nos services
            </Text>
            <VStack spacing={2} alignItems='flex-start' color='gray.300'>
              <Link as={ReachLink} to='/service-apres-vente'>
                Services aprés-ventes
              </Link>
            </VStack>
          </VStack>

          <VStack spacing={4} alignItems='flex-start'>
            <Text fontSize='md' fontWeight='bold'>
              Contact
            </Text>
            <VStack spacing={2} alignItems='flex-start' color='gray.300'>
              <Link as={ReachLink} to='/nous-contacter'>
                Nous contacter
              </Link>
            </VStack>
          </VStack>
        </HStack>

        <HStack alignSelf={"end"}>
          {socialLinks.map((link) => (
            <IconButton
              variant={"link"}
              color='white'
              size={"md"}
              key={link.title}
              aria-label={link.title}
              icon={
                <Icon boxSize={12}>
                  <link.icon />
                </Icon>
              }
            />
          ))}
        </HStack>
      </Stack>

      <Divider my={4} />

      <Text textAlign={"center"}>© 2023 SUROIL-KDCM. Tous droits réservés</Text>
    </Box>
  );
};

export default Footer;
