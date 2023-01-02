import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  { name: "Nos produits", href: "/products" },
  { name: "Services", href: "#" },
  { name: "Qui sommes nous", href: "#" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <>
      <Box
        bg={"primary"}
        color={"white"}>
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
            <Text>© 2022 SUROIL-KDCM. All rights reserved</Text>
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
