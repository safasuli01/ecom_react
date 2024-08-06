// src/slices/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formValues: {
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  },
  formErrors: {
    email: false,
    name: false,
    username: false,
    password: false,
    confirmPassword: false
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormValues: (state, action) => {
      state.formValues = { ...state.formValues, ...action.payload };
    },
    setFormErrors: (state, action) => {
      state.formErrors = { ...state.formErrors, ...action.payload };
    }
  }
});

export const { updateFormValues, setFormErrors } = formSlice.actions;
export default formSlice.reducer;
