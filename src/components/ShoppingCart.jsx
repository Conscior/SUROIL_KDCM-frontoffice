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
  Box,
  Input,
  FormLabel,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
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
import { useGetStoresQuery } from "../features/api/storesApiSlice";

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
  const [store, setStore] = useState(false)

  const user = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  const [createOrder, { isSuccess, isLoading: isCreatingOrder }] =
    useCreateOrderMutation();
  const { data: stores } = useGetStoresQuery();

  const handleOnCheckout = async () => {
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
  };

  const alertInfo = {
    header: "Créer un devis ?",
    body: "Un email vous sera envoyer.",
    confirmText: "Confirmer",
    cancelText: "Annuler",
    onConfirm: handleOnCheckout,
  };

  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch, cartItems]);

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
            <Box pb={4}>
              <Select
                name='store'
                value={store}
                onChange={handleFormChange}
                placeholder='Choisissez un magasin'>
                {stores?.map((store) => (
                  <option key={store.id} value={store.id}>
                    {store.name}
                  </option>
                ))}
              </Select>
            </Box>
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
              isLoading={isCreatingOrder}
              loadingText='Creation du devis ...'
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
