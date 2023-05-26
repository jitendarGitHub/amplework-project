import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
