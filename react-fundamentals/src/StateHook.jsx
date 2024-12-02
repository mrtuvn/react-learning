import React, { useEffect } from "react";
import Button from "./components/Button";

function createInitialState() {
  console.log("createInitialState: ");
  return 10;
}

function StateHook() {
  const [age, setAge] = React.useState(createInitialState);
  const inputRef = React.useRef();
  const [todo, setTodo] = React.useState(["original"]);

  function updateAge() {
    // setAge(age + 1);
    // setAge(age + 2);
    // setAge(age + 3);

    // updater function
    setAge((prevState) => prevState + 1);
    setAge((prevState) => prevState + 1);
    setAge((prevState) => prevState + 1);
  }

  const handleAddTodo = () => {
    const inputEl = inputRef.current; // truong
    const newTodo = [...todo, inputEl.value]; // [orignal, truong]
    setTodo(newTodo);
    normalizeTodo();
    inputEl.value = "";
  };

  const normalizeTodo = () => {
    // Expecting result ["_original", "_truong"]
    // const newTodo = todo.map((todoValue) => `_${todoValue}`);
    // setTodo(newTodo);
    setTodo((prevState) => prevState.map((todoValue) => `_${todoValue}`));
  };

  return (
    <div>
      <h1>StateHook</h1>
      <br />
      Age: {age}
      <br />
      <Button text="Update Age" onClick={updateAge} />
      <h3>Demo updater function</h3>
      <input ref={inputRef} placeholder="your todo..." />
      <Button text="Add todo" onClick={handleAddTodo} />
      <ul>
        {todo.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StateHook;
