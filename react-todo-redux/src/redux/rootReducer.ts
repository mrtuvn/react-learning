import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
