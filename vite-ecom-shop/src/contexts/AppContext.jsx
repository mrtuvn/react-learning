import React from "react";
export const AppContextProvider = React.createContext(null);

const AppContext = ({ children }) => {
  const contextVal = {
    theme: "light",
  };

  return <AppContextProvider value={contextVal}>{children}</AppContextProvider>;
};

export default AppContext;
