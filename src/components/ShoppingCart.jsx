import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  updateCart,
  clearCart,
  selectCartItems,
  selectTotalQuantity,
} from "../features/state/shoppingCartSlice";

import { selectCurrentUser } from "../features/state/authSlice";
import { useCreateOrderMutation } from "../features/api/ordersApiSlice";

import ShoppingCartItem from "./ShoppingCartItem";
import CustomAlertDialog from "./CustomAlertDialog";

const ShoppingCart = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const user = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  const [createOrder, { isSuccess }] = useCreateOrderMutation();

  const alertInfo = {
    header: "Créer un devis ?",
    body: "Un email vous sera envoyer.",
    confirmText: "Confirmer",
    cancelText: "Annuler",
    onConfirm: async () => {
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
        onClose();
        onAlertClose();
      } catch (error) {
        toast({
          title: "Couldn't create an order.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
  };

  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch, cartItems]);

  // const handleOnCheckout = async () => {
  //   try {
  //     const res = await createOrder({
  //       customer_id: user.id,
  //       order_lines: cartItems,
  //       status: "draft",
  //     });
  //     console.log(res);
  //     toast({
  //       title: "Order created",
  //       status: "success",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     dispatch(clearCart()); // Clear shopping cart
  //     onClose(); //Close drawer
  //   } catch (error) {
  //     toast({
  //       title: "Couldn't create an order.",
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // onClose();
  // navigate("/checkout");
  // };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size='sm'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Panier ({totalQuantity} article{totalQuantity > 1 ? "s" : ""})
          </DrawerHeader>

          <DrawerBody>
            <VStack>
              {cartItems?.map((item) => (
                <ShoppingCartItem key={item.product_id} cartItem={item} />
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant='outline'
              mr={3}
              onClick={() => dispatch(clearCart)}>
              Réinitialiser
            </Button>
            <Button
              colorScheme={"red"}
              disabled={cartItems.length && user ? false : true}
              onClick={onAlertOpen}>
              Créer le devis
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <CustomAlertDialog
        isOpen={isAlertOpen}
        onClose={onAlertClose}
        alertInfo={alertInfo}
      />
    </>
  );
};

export default ShoppingCart;
