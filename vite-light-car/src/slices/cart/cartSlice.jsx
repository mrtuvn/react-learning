// src/slices/cart/cartSlice.ts
import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  isEmpty: true,
  totalItems: 0,
};

const calculateTotals = (state) => {
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  state.total = total;
  state.totalItems = totalItems;
  state.isEmpty = state.items.length === 0;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM(state, action) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
      calculateTotals(state);
    },

    REMOVE_ITEM(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      calculateTotals(state);
    },

    UPDATE_ITEM(state, action) {
      const { productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === productId);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity = quantity;
        calculateTotals(state);
      }
    },

    LOAD_CART(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

// Selector for checking if product is in cart and its quantity
export const selectCartItemDetails = createSelector(
  [(state) => state.cart.items, (_state, productId) => productId],
  (cartItems, productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return {
      isInCart: !!cartItem,
      quantity: cartItem?.quantity || 0,
      maxQuantity: cartItem?.stock || 0,
    };
  },
);

export const { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, LOAD_CART } =
  cartSlice.actions;
export default cartSlice.reducer;
