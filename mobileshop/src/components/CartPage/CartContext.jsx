import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer } from "./CartReducer";

// Create the CartContext
const CartContext = createContext();

// Initial state for the cart
const initialState = {
  items: [], // Array to hold items in the cart
};

// CartProvider component to provide cart state and dispatch to children
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    console.log("run into effect");
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (savedCart.length > 0) {
      savedCart.forEach((item) => {
        dispatch({ type: "ADD_TO_CART", item });
      });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    console.log("run into effect check cart");
    if (state.items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);
