import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from "@chakra-ui/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../features/state/authSlice";
import { clearCart } from "../../features/state/shoppingCartSlice";

import { useCreateOrderMutation } from "../../features/api/ordersApiSlice";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify='space-between' fontSize='sm'>
      <Text fontWeight='medium' color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight='medium'>{value}</Text> : children}
    </Flex>
  );
};

const CartOrderSummary = ({ cartItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const user = useSelector(selectCurrentUser);
  const [createOrder, { isSuccess }] = useCreateOrderMutation();

  const handleOrderSubmit = async () => {
    try {
      const res = await createOrder({
        customer_id: user.id,
        order_lines: cartItems,
        status: "draft",
      });
      console.log(res);
      toast({
        title: "Order created",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(clearCart());
      navigate("/"); // Navigate to user orders page
    } catch (error) {
      toast({
        title: "Couldn't create an order.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' padding='8' width='full'>
      <Heading size='md'>Order Summary</Heading>

      <Stack spacing='6'>
        {/* <OrderSummaryItem label='Subtotal' value={formatPrice(597)} /> */}
        <OrderSummaryItem label='Subtotal' value={totalPrice} />
        <OrderSummaryItem label='Shipping + Tax'>
          <Link href='#' textDecor='underline'>
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label='Coupon Code'>
          <Link href='#' textDecor='underline'>
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Total
          </Text>
          <Text fontSize='xl' fontWeight='extrabold'>
            {/* {formatPrice(597)} */}
            {totalPrice}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme='blue'
        size='lg'
        fontSize='md'
        rightIcon={<BsChevronRight />}
        onClick={handleOrderSubmit}>
        Checkout
      </Button>
    </Stack>
  );
};

export default CartOrderSummary;
