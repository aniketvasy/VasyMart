import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    newCart(state, action) {
      state.itemsList = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    replaceCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalPrice = state.totalPrice - existingItem.totalPrice;
      state.itemsList = state.itemsList.filter((item) => item.id !== id);
    },
    addItemToCart(state, action) {
      state.totalQuantity++;

      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          src: newItem.src,
        });
      }
      state.totalPrice = state.totalPrice + newItem.price;
    },
    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalPrice = state.totalPrice - existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
