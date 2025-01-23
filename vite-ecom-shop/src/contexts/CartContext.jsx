import React from "react";
import { calcPrice } from "../hooks/usePrice";
const initialState = {
  items: [], // Array to hold items in the cart
  cost: 0,
};

export const CartContextProvider = React.createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.find(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (existingItemIndex !== -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      return {
        ...state,
        items: newItems,
        cost: calcPrice(newItems),
      };

    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: filteredItems,
        cost: calcPrice(filteredItems),
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
        cost: calcPrice(increasedItems),
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
        cost: calcPrice(decreasedItems),
      };

    case "CLEAR_CART":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  // use reducer for init
  const [cart, dispatch] = React.useReducer(cartReducer, initialState);

  const contextValue = {
    cart,
    dispatch,
  };

  //   React.useEffect(() => {
  //     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //     if (savedCart.length > 0) {
  //       savedCart.forEach((item) => {
  //         dispatch({ type: "ADD_TO_CART", item });
  //       });
  //     }
  //   }, []);

  //   React.useEffect(() => {
  //     if (cart.items.length > 0) {
  //       localStorage.setItem("cart", JSON.stringify(cart.items));
  //     }
  //   }, [cart.items]);

  return (
    <CartContextProvider value={contextValue}>{children}</CartContextProvider>
  );
};

export default CartContext;
