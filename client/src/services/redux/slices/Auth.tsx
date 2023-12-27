import { createSlice } from "@reduxjs/toolkit";



const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: {
    signup: {} ,
  },
  reducers: {
    signUpUser: (state, action) => {
      state.signup = action.payload;
    },
  },
});

export const { signUpUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
