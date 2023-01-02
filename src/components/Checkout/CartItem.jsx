import {
  CloseButton,
  IconButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  HStack,
  VStack,
  Box,
  Image,
  Stack,
  Grid,
  GridItem,
  chakra,
  Icon,
} from "@chakra-ui/react";
import { BsStar, BsChevronRight, BsChevronLeft } from "react-icons/bs";

import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../features/state/shoppingCartSlice";

import CartProductMeta from "./CartProductMeta";
import PriceTag from "./PriceTag";

export const QuantitySelect = ({ itemID, quantity }) => {
  const dispatch = useDispatch();

  return (
    <HStack
      spacing={5}
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      mt={2}>
      {/* <Icon
        as={BsChevronLeft}
        color='gray.500'
        onClick={handleDecrementItemQuantity}
      /> */}
      <IconButton
        variant='outline'
        // colorScheme='teal'
        color='gray.500'
        aria-label='Call Sage'
        fontSize='20px'
        icon={<BsChevronLeft />}
        onClick={() => dispatch(decrementQuantity(itemID))}
      />
      <span>{quantity}</span>
      <IconButton
        variant='outline'
        // colorScheme='teal'
        color='gray.500'
        aria-label='Call Sage'
        fontSize='20px'
        icon={<BsChevronRight />}
        onClick={() => dispatch(incrementQuantity(itemID))}
      />
      {/* <Icon
        as={BsChevronRight}
        color='gray.500'
        onClick={() => incrementItemQuantity(itemID)}
      /> */}
    </HStack>
  );
};

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { product_id, product_name, product_imgURL, product_quantity } = cartItem;
  const description = "Test";
  const currency = "$";

  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify='space-between'
        align='center'>
        <CartProductMeta name={product_name} description={description} image={product_imgURL} />

        {/* Desktop */}
        <Flex
          width='full'
          justify='space-between'
          display={{ base: "none", md: "flex" }}>
          <QuantitySelect itemID={product_id} quantity={product_quantity} />
          {/* <PriceTag price={product_price * product_quantity} currency={currency} /> */}
          <CloseButton
            aria-label={`Delete ${product_name} from cart`}
            onClick={() => dispatch(removeItem(product_id))}
          />
        </Flex>

        {/* Mobile */}
        <Flex
          mt='4'
          align='center'
          width='full'
          justify='space-between'
          display={{ base: "flex", md: "none" }}>
          <Link
            fontSize='sm'
            textDecor='underline'
            onClick={() => dispatch(removeItem(product_id))}>
            Delete
          </Link>
          <QuantitySelect itemID={product_id} quantity={product_quantity} />
          {/* <PriceTag price={product_price} currency={currency} /> */}
        </Flex>
      </Flex>
    </>
  );
};

export default CartItem;
