import React, { useReducer } from "react";
import { DrawerContext } from "./drawerContext";
import { drawerReducer } from "./drawerReducer";

export const initialState = {
  displayDrawer: false,
  drawerView: null,
  data: null,
};

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drawerReducer, initialState);
  const setDrawerView = (view) => dispatch({ type: "SET_DRAWER_VIEW", view });
  const openDrawer = (data) => dispatch({ type: "OPEN_DRAWER", data });
  const closeDrawer = () => dispatch({ type: "CLOSE_DRAWER" });

  const value = React.useMemo(
    () => ({
      ...state,
      openDrawer,
      closeDrawer,
      setDrawerView,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state],
  );
  return <DrawerContext value={value}>{children}</DrawerContext>;
};
