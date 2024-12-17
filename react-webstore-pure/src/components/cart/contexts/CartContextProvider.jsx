import React, { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer, { CART_ACTIONS } from "./CartReducer";

export const CartContext = createContext();

const initState = {
  items: [],
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initState);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (storedCart.length > 0) {
      storedCart.forEach((item) => {
        dispatch({ type: CART_ACTIONS.ADD_ITEM, item });
      });
    }

    if (cart.items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart.items));
    }
  }, [cart.items]);

  const calculateTotal = () => {
    return cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
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
