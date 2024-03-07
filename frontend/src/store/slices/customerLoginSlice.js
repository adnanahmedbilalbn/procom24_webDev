import { createSlice } from "@reduxjs/toolkit";

// create slice with key and userData as initial state
const customerLoginSlice = createSlice({
    name: "customerLogin",
    initialState: false,
    reducers: {
        setCustomerLoginState(state, action) {
        return action.payload
      },
      
    },
  });
  
  export const { setCustomerLoginState } = customerLoginSlice.actions;
  export const customerLoginReducer = customerLoginSlice.reducer;