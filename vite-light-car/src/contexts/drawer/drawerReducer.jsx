export const drawerReducer = (state, action) => {
  switch (action.type) {
    case "SET_DRAWER_VIEW":
      return { ...state, drawerView: action.view };

    case "OPEN_DRAWER":
      return { ...state, displayDrawer: true, data: action.data };

    case "CLOSE_DRAWER":
      return { ...state, displayDrawer: false };

    default:
      return state;
  }
};
