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
      bg='red.800'
      color={"white"}
      borderTop='1px solid'
      borderColor='gray.300'
      p={{ base: 5, md: 8 }}
      mt={4}
      marginInline='auto'>
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent='space-between'
        direction={{ base: "column", md: "row" }}>
        <Box maxW='300px'>
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
          <Text fontSize='md' fontWeight='bold'>
            Presentation
          </Text>

          <VStack spacing={4} alignItems='flex-start'>
            <Text fontSize='md' fontWeight='bold'>
              Produits
            </Text>
            <VStack spacing={2} alignItems='flex-start' color='gray.500'>
              <Link>Nos produits</Link>
            </VStack>
          </VStack>

          <VStack spacing={4} alignItems='flex-start'>
            <Text fontSize='md' fontWeight='bold'>
              Nos services
            </Text>
            <VStack spacing={2} alignItems='flex-start' color='gray.500'>
              <Link>Services aprés-ventes</Link>
            </VStack>
          </VStack>

          <VStack spacing={4} alignItems='flex-start'>
            <Text fontSize='md' fontWeight='bold'>
              Contact
            </Text>
            <VStack spacing={2} alignItems='flex-start' color='gray.500'>
              <Link>Nous contacter</Link>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={3}
        justifyContent='space-between'>
        <Text fontSize='md'>© 2023 SUROIL-KDCM. Tous droits réservés</Text>
        <Stack spacing={4} direction={{ base: "column", md: "row" }}>
          {/* Social links */}
          {socialLinks.map((link) => (
            <IconButton
              variant={"link"}
              color='white'
              size={"md"}
              key={link.title}
              aria-label={link.title}
              // icon={<link.icon boxSize={12} />}
              icon={
                <Icon boxSize={12}>
                  <link.icon />
                </Icon>
              }
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
