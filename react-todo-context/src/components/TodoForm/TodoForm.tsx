import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTodosDispatch } from "@/contexts/AppContext";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useTodosDispatch();

  return (
    <div className="flex gap-2 mb-2">
      <Input
        placeholder="Please enter todo"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <Button
        className="add"
        onClick={() => {
          setTodoTitle("");
          dispatch({
            type: "TODO_ADD",
            id: uuidv4(),
            title: todoTitle,
          });
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
