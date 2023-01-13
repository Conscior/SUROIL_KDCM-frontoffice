import {
  Container,
  HStack,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ReactComponent as UNDRAW_LOGISTICS } from "../../assets/undraw_logistics.svg";

const Products404 = () => {
  return (
    <HStack>
      <Box width={"60%"} display={{ base: "none", lg: "flex", xl: "flex" }}>
        <UNDRAW_LOGISTICS />
      </Box>
      <Box textAlign='center' py={10} px={6}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          bgGradient='linear(to-r, primary, secondary)'
          backgroundClip='text'>
          Aucun produit trouvé !
        </Heading>
        <Text fontSize='18px' mt={3} mb={2}>
          Veuillez revenir plus tard.
        </Text>

        <Button
          bgGradient='linear(to-r, primary, secondary)'
          color='white'
          variant='solid'>
          Aller à l'accueil
        </Button>
      </Box>
    </HStack>
    // <Container width={"full"}>
    //   <UNDRAW_LOGISTICS />
    // </Container>
  );
};

export default Products404;
