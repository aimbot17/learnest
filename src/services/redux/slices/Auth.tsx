import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  signup: {},
  user: {},
};

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.signup = action.payload;
    },
    loginUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = {};
    },
  },
});

export const { signUpUser, loginUser, logoutUser } =
  AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
