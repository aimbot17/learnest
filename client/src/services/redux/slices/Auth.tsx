import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: {
    signup: [1],
  },
  reducers: {
    addUser: (state, action) => {
      state.signup.push(action.payload);
    },
    signout: (state) => {
      state.signup = [];
    },
  },
});

export const { addUser, signout } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
