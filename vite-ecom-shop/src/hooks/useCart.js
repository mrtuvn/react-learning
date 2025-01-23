import React from "react";
import { CartContextProvider as CartContext } from "../contexts/CartContext";

// Custom hook to access the cart context
export const useCart = () => React.useContext(CartContext);
