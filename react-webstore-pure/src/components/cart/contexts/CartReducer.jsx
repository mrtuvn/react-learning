export const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedState = [...state];
        updatedState[existingItemIndex].quantity += action.payload.quantity;
        return updatedState;
      } else {
        return [...state, action.payload];
      }
    case CART_ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case CART_ACTIONS.UPDATE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case CART_ACTIONS.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default CartReducer;
