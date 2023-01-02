import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  updateCart,
  selectCartItems,
  selectTotalQuantity,
  // selectTotalPrice,
} from "../../features/state/shoppingCartSlice";

import CartItem from "./CartItem";

const CheckoutForm = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  // const totalPrice = useSelector(selectTotalPrice);

  useEffect(() => {
    console.log("Checkout updated");
    dispatch(updateCart());
  }, [dispatch, cartItems]);

  const content = cartItems.length ? (
    <Box
    // maxW={{ base: "3xl", lg: "7xl" }}
    // maxW="100%"
    // mx='auto'
    // px={{ base: "4", md: "8", lg: "30" }}
    // py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}>
        <Stack spacing={{ base: "8", md: "10" }} flex='2'>
          <Heading fontSize='2xl' fontWeight='extrabold'>
            Shopping Cart ({totalQuantity} items)
          </Heading>

          <Stack spacing='6'>
            {cartItems.map((item) => (
              <CartItem key={item.product_id} cartItem={item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction='column' align='center' flex='1'>
          {/* Cart Order Summary */}
          {/* <CartOrderSummary cartItems={cartItems} totalPrice={totalPrice} /> */}

          {/* Rest of info */}
          <HStack mt='6' fontWeight='semibold'>
            <p>or</p>
            <Link
              as={RouterLink}
              to='/products'
              color={mode("blue.500", "blue.200")}>
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  ) : (
    <span>No cart items</span>
  );

  return content;
};

export default CheckoutForm;
