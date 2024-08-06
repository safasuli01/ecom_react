import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
