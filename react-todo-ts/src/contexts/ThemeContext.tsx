import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }: { children: React.JSX.Element }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const methodsProvider = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={methodsProvider}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
