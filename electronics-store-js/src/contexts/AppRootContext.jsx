import React, { createContext } from "react";

export const AppContext = createContext(null);
const sampleVal = "appcontext";

function funcSum(a = 0, b = 2) {
  return a + b;
}

const AppRootContext = ({ children }) => {
  /* React 19 context doesn't need Provider anymore.
    Previous need this
    AppContext.Provider
    Current we only need
    AppContext
  */
  return (
    <AppContext
      value={{
        sampleVal: ["abc", "cde"],
        sample2: 12,
        stringText: "abc",
        funcSum,
      }}
    >
      {children}
    </AppContext>
  );
};

export default AppRootContext;
