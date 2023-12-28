import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signup: {},
};

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.signup = action.payload;
    },
  },
});

export const { signUpUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
