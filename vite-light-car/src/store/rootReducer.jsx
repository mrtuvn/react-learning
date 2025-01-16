import { combineReducers } from "@reduxjs/toolkit";
import compareReducer from "../slices/compare/compareSlice";
import wishlistReducer from "../slices/wishlist/wishlistSlice";
import authReducer from "../slices/auth/authSlice";
import cartReducer from "../slices/cart/cartSlice";

const rootReducer = combineReducers({
  compare: compareReducer,
  wishlist: wishlistReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
