import { ThemesContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const { isLightMode, toggleTheme } = useContext(ThemesContext);

  return (
    <Button
      className={`text-right block float-right clear-both bg-${
        isLightMode ? "light" : "dark"
      } text-${isLightMode ? "light" : "dark"} p-2 rounded`}
      onClick={toggleTheme}
    >
      Toogle {isLightMode ? "Light" : "Dark"}
    </Button>
  );
};

export default ThemeSwitcher;
