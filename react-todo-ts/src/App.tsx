import "./App.css";
import { useState, useContext } from "react";
import LanguageList from "@components/LanguageList";
import TodoLists from "@components/TodoLists";
import { ThemeContext } from "./contexts/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [count, setCount] = useState(0);
  const [unmount, setUnmount] = useState(false);
  const context = useContext(ThemeContext);

  return (
    <div className={context.theme} style={{ minWidth: "900px" }}>
      <ThemeSwitcher />
      <div>React {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Update Count</button>
      <br />
      <hr />
      {unmount && <LanguageList />}
      <button onClick={() => setUnmount((prevState) => !prevState)}>
        Show
      </button>
      <br />

      <hr />
      <p>TODO WITH REDUCER</p>
      <TodoLists />

      <br />
    </div>
  );
}

export default App;
