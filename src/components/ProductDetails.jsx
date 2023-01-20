import {
  Box,
  Container,
  Stack,
  HStack,
  Text,
  Image,
  Flex,
  Button,
  IconButton,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { IoDocumentOutline } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/state/shoppingCartSlice";

const ProductDetails = ({ product }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { id, name, description, imgURL } = product;

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(product));
    toast({
      title: "Product added.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleProductDownload = () => {};

  return (
    <Container maxW='100%'>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={"md"}
            alt={name}
            src={imgURL}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
              {name}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }>
            <Text fontSize={"lg"}>{description}</Text>
          </Stack>

          <HStack mt={8} py={"7"}>
            <Button
              variant={"suroilSolid"}
              w={"80%"}
              size={"lg"}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleAddItemToCart}>
              Ajouter au panier
            </Button>
            <IconButton
              variant={"outline"}
              size={"lg"}
              aria-label='Telecharger fiche produit'
              icon={<IoDocumentOutline />}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleProductDownload}
            />
          </HStack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductDetails;
