import React from "react";
import AppContext from "./AppContext";

const ThemeContext = () => {
  const appContext = React.use(AppContext);

  const theme = appContext.getContext("theme");
  return theme;
};

export default ThemeContext;
