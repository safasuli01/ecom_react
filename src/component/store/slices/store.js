// src/component/store/slices/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import formReducer from '../slices/formSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer
  },
});

export default store;
