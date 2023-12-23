import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./slices/Auth";

const store = configureStore({
  reducer: {
    auth: AuthenticationSlice,
  },
});

export default store;
