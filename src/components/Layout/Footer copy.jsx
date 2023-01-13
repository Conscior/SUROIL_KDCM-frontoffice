import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  HStack,
  SimpleGrid,
  useColorModeValue,
  Tag,
  Flex,
  Input,
  Divider,
} from "@chakra-ui/react";

import { FaFacebook, FaInstagram, FaTwitter, FaMailBulk } from "react-icons/fa";

import { ReactComponent as SUROIL } from "../../assets/SUROIL.svg";
import { ReactComponent as KDCM } from "../../assets/KDCM.svg";

const navLinks = [
  { name: "Nos produits", href: "/produits" },
  { name: "Services", href: "#" },
  { name: "Qui sommes nous", href: "#" },
  { name: "Contact", href: "/nous-contacter" },
];

const socials = [
  {
    title: "Facebook",
    link: "www.facebook.com",
    icon: FaFacebook,
  },
  { title: "Instagram", link: "www.instagram.com", icon: FaInstagram },
  { title: "Twitter", link: "www.twitter.com", icon: FaTwitter },
];

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={8}>
        <SimpleGrid
          // templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          columns={{ base: "1", md: "3", lg: "3" }}
          spacing={8}
          justifyContent={"space-around"}>
          <Stack>
            <HStack w={"300px"} justify={"center"} align={"center"}>
              <SUROIL />
              <KDCM />
            </HStack>
            <Stack direction={"row"} spacing={6}>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Liens
            </Text>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>{link.name}</Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Informations
            </Text>
            <Text>Adresse: </Text>
            <Text>Email: x@gmail.com  </Text>
            <Text>Tel: +213 x</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider />
      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 SUROIL-KDCM. Tous droits réservés
        </Text>
    </Box>
  );

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Product
            </Text>
            <Link href={"#"}>Overview</Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Features</Link>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}>
                New
              </Tag>
            </Stack>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Company
            </Text>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Legal
            </Text>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Follow Us
            </Text>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}>
          <HStack w={"300px"}>
            <SUROIL />
            <KDCM />
          </HStack>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 SUROIL-KDCM. All rights reserved
        </Text>
      </Box>
    </Box>
  );
  return (
    <>
      <Box bg={"secondary"} color={"white"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}>
          {/* LOGO */}
          <p>SUROIL-KDCM</p>
          {/*  */}
          <Stack direction={"row"} spacing={6}>
            {links.map((link) => (
              <Link key={link.name} to={link.href}>
                {link.name}
              </Link>
            ))}
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}>
            <Text>© 2023 SUROIL-KDCM. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
