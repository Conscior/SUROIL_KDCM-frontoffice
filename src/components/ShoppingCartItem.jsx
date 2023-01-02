import { HStack, Box, Flex, chakra, IconButton, Button } from "@chakra-ui/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../features/state/shoppingCartSlice";

const ShoppingCartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { product_id, product_name, product_imgURL, product_quantity } =
    cartItem;
  return (
    <>
      <Flex
        w={"full"}
        mx='auto'
        bg='white'
        _dark={{
          bg: "gray.800",
        }}
        shadow='lg'
        rounded='lg'
        overflow='hidden'>
        <Box w={1 / 3} bgSize='cover' backgroundImage={product_imgURL}></Box>

        <Box
          w={2 / 3}
          p={{
            base: 4,
            md: 4,
          }}>
          <chakra.h1
            fontSize='2xl'
            fontWeight='bold'
            color='gray.800'
            _dark={{
              color: "white",
            }}>
            {product_name}
          </chakra.h1>

          <HStack
            spacing={1}
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            mt={2}>
            <IconButton
              variant={"ghost"}
              icon={<BsChevronLeft />}
              onClick={() => {
                dispatch(decrementQuantity(product_id));
              }}
            />
            <span>{product_quantity}</span>
            <IconButton
              variant={"ghost"}
              icon={<BsChevronRight />}
              onClick={() => dispatch(incrementQuantity(product_id))}
            />
          </HStack>

          <Flex mt={3} alignItems='center' justifyContent='space-between'>
            {/* <chakra.h1 color='white' fontWeight='bold' fontSize='lg'>
              ${product_price}
            </chakra.h1> */}
            <Button
              px={2}
              py={1}
              bg='white'
              fontSize='xs'
              color='gray.900'
              fontWeight='bold'
              rounded='lg'
              textTransform='uppercase'
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
              onClick={() => dispatch(removeItem(product_id))}>
              Supprimer
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ShoppingCartItem;
