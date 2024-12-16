import React, { useReducer, useState, useEffect } from "react";
import { data as mockdata } from "../api/data-mock.js";
import CartProvider from "./cart/CartProvider.jsx";

export const AppProvider = React.createContext();

const AppContext = ({ children }) => {
  let products = [];
  let cartData = [];

  const initialCart = {
    qty: 0,
    total: 0,
    items: [],
  };

  const cartReducer = () => {};

  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  products = mockdata;
  console.log(products);
  return (
    <AppProvider value={products}>
      <CartProvider value={cartData}>{children}</CartProvider>
    </AppProvider>
  );
};

export default AppContext;
