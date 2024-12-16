import React, { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer, { CART_ACTIONS } from "./CartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, dispatch] = useReducer(CartReducer, storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value = {
    cart,
    dispatch,
    actions: CART_ACTIONS,
    calculateTotal,
  };

  return <CartContext value={value}>{children}</CartContext>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContextProvider;
