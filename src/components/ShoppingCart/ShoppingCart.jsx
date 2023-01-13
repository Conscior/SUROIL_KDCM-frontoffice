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
} from "../../features/state/shoppingCartSlice";

import { selectCurrentUser } from "../../features/state/authSlice";
import { useCreateOrderMutation } from "../../features/api/ordersApiSlice";
import { useGetStoresQuery } from "../../features/api/storesApiSlice";

import ShoppingCartItem from "./ShoppingCartItem";
import CustomAlertDialog from "../CustomAlertDialog";

const ShoppingCart = ({
  isOpen: isShoppingCartOpen,
  onClose: onShoppingCartClose,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const [store, setStore] = useState(false);
  const handleStoreChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    if (name === "store") setStore(value);
  };

  const user = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  const [createOrder, { isSuccess, isLoading: isCreatingOrder }] =
    useCreateOrderMutation();
  const { data: stores } = useGetStoresQuery();

  const handleCartClear = () => {
    dispatch(clearCart());
    setStore("");
  };

  const handleOnCheckout = async () => {
    try {
      await createOrder({
        customer_id: user.id,
        order_lines: cartItems,
        store_id: store,
        status: "draft",
      }).unwrap();
      toast({
        title: "Devis crée avec succès !",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      handleCartClear()
      onAlertClose();
      onShoppingCartClose();
    } catch (error) {
      let errMessage = "Erreur lors de la création du devis.";
      if (error.data?.message) errMessage = error.data.message;
      toast({
        title: errMessage,
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
      <Drawer
        isOpen={isShoppingCartOpen}
        onClose={onShoppingCartClose}
        size='sm'>
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
                onChange={handleStoreChange}
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
              variant='suroilOutline'
              mr={3}
              onClick={handleCartClear}>
              Réinitialiser
            </Button>
            <Button
              variant="suroilSolid"
              disabled={cartItems.length && user && store ? false : true}
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
