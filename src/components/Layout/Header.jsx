import { Icon, VStack, HStack, Text, Link } from "@chakra-ui/react";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io5";

const headerSocial = ({ icon }) => {
  <Icon as={icon} _hover={{ color: "white", cursor: "pointer" }} />;
};

const Header = () => {
  return (
    <HStack
      h={"5vh"}
      color={"white"}
      bg={"suroilRed.500"}
      fontFamily='heading'
      justify={"space-around"}>
      <Link>Nos adresses</Link>
      <HStack spacing={4} color='suroilWhite'>
        <Icon
          as={IoLogoFacebook}
          _hover={{ color: "white", cursor: "pointer" }}
        />
        <Icon
          as={IoLogoInstagram}
          _hover={{ color: "white", cursor: "pointer" }}
        />
        <Icon
          as={IoLogoTwitter}
          _hover={{ color: "white", cursor: "pointer" }}
        />
        <Icon
          as={IoLogoLinkedin}
          _hover={{ color: "white", cursor: "pointer" }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
