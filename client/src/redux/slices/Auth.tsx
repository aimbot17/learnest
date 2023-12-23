import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: {
    Signup: ["Banana", "Apple"],
  },
  reducers: {
    addUser: (state, action) => {
      state.Signup.push(action.payload);
    },
    signout: (state) => {
      state.Signup = [];
    },
  },
});

export const { addUser, signout } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
