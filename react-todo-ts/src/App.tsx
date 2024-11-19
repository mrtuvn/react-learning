import { useState } from "react";
import TodosList from "@components/TodosList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [unmount, setUnmount] = useState(false);
  return (
    <>
      <div>React {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Update Count</button>
      <br />

      {unmount && <TodosList />}
      <button onClick={() => setUnmount((prevState) => !prevState)}>
        Show
      </button>
    </>
  );
}

export default App;
