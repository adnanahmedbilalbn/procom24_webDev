import { createSlice } from "@reduxjs/toolkit";

// create slice with key and userData as initial state
const loginSlice = createSlice({
    name: "login",
    initialState: false,
    reducers: {
      setLoginState(state, action) {
        return action.payload
      },
      
    },
  });
  
  export const { setLoginState } = loginSlice.actions;
  export const loginReducer = loginSlice.reducer;