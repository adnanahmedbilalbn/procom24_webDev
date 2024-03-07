import { createSlice } from "@reduxjs/toolkit";

// create slice with key and userData as initial state
const usersSlice = createSlice({
    name: "userData",
    initialState: {},
    reducers: {
      setUser(state, action) {
        console.log(action)
        return action.payload
      },
      
    },
  });
  
  export const { setUser } = usersSlice.actions;
  export const userReducer = usersSlice.reducer;