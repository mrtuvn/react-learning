import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBlock: "1rem",
      }}
    >
      ThemeSwitcher
      <div>
        <button onClick={context.toggleTheme}>Switch To {context.theme}</button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
