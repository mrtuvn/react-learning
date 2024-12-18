// Reducer function to manage actions
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.item.id,
      );

      if (existingItem) {
        // If the item exists, update its quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + action.item.quantity }
              : item,
          ),
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          ...state,
          items: [...state.items, action.item],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item,
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};
