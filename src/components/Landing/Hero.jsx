import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://www.suroil.fr/wp-content/uploads/2021/04/Idropulitrici_per_impresa_edile_1.jpg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      fontFamily='heading'>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            color={"white"}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
            SUROIL KDCM
          </Heading>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
            Leader dans son domaine depuis 1994
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"suroilGreen.100"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "suroilGreen.200" }}>
              Decouvrez nos produits
            </Button>
            {/* <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}>
              Show me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
