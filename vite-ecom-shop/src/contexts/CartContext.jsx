import React from "react";
import { totalCost } from "../hooks/usePrice";

const getInitialState = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { items: [], totalCost: 0 };
  } catch (error) {}
  console.error("Error parsing cart from localStorage:", error);
  return { items: [], cost: 0 };
};

export const CartContextProvider = React.createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      console.log(newItems, state.items);
      return {
        ...state,
        items: newItems,
        cost: totalCost(newItems),
      };

    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: filteredItems,
        cost: totalCost(filteredItems),
      };

    case "INCREASE_QUANTITY":
      const increasedItems = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        items: increasedItems,
        cost: totalCost(increasedItems),
      };

    case "DECREASE_QUANTITY":
      const decreasedItems = state.items.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        items: decreasedItems,
        cost: totalCost(decreasedItems),
      };

    case "CLEAR_CART":
      return {
        items: [],
        cost: 0,
      };

    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  // use reducer for init
  const [cart, dispatch] = React.useReducer(cartReducer, getInitialState());

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const contextValue = {
    cart,
    dispatch,
  };

  return (
    <CartContextProvider value={contextValue}>{children}</CartContextProvider>
  );
};

export default CartContext;
