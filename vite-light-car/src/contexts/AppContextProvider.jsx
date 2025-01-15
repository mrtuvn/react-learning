import React, { createContext } from "react";

const AppContext = createContext();
const objContext = {
  storeName: "Tuna",
  auth: false,
};
const AppContextProvider = ({ children }) => {
  return <AppContext value={objContext}>{children}</AppContext>;
};

export default AppContextProvider;
