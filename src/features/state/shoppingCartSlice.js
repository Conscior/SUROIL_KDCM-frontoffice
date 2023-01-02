import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: { cartItems: [], totalQuantity: 0},
  reducers: {
    // Set user and token
    addItemToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.product_id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        // state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartItems.push({
          product_id: action.payload.id,
          product_name: action.payload.name,
          product_imgURL: action.payload.imgURL,
          product_quantity: 1,
          // product_price: action.payload.price,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const targetItem = state.cartItems.find(
        (item) => item.product_id === action.payload
      );
      targetItem.product_quantity++;
    },
    decrementQuantity: (state, action) => {
      // action.payload should be the itemID
      const targetItem = state.cartItems.find(
        (item) => item.product_id === action.payload
      );
      if (targetItem.product_quantity <= 1) {
        targetItem.product_quantity = 1; // Maybe remove the item completely
      } else {
        targetItem.product_quantity--;
      }
    },
    removeItem: (state, action) => {
      // action.payload should be the itemID
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    updateCart: (state) => {
      console.log("called update cart");
      let quantity = 0;
      // let price = 0;

      state.cartItems.map((item) => {
        quantity += item.product_quantity;
        // price += item.product_quantity * item.product_price;
      });

      state.totalQuantity = quantity;
      // state.totalPrice = price;
    },
  },
});

export const {
  addItemToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
  updateCart,
} = shoppingCartSlice.actions;

export const selectCartItems = (state) => state.shoppingCart.cartItems;
export const selectTotalQuantity = (state) => state.shoppingCart.totalQuantity;
export const selectTotalPrice = (state) => state.shoppingCart.totalPrice;

export default shoppingCartSlice.reducer;
