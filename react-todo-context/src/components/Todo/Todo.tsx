import { useTodosDispatch } from "@/contexts/AppContext";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodosDispatch();

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <div className="flex items-center space-x-2">
          <Checkbox
            id={todo.id}
            checked={todo.isCompleted}
            onChange={(e) =>
              dispatch({
                type: "TODO_EDIT",
                todo: {
                  ...todo,
                  isCompleted: e.target.checked,
                },
              })
            }
          />
          <label
            htmlFor={todo.id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            )}
          >
            <Input
              value={todo.title}
              onChange={(e) =>
                dispatch({
                  type: "TODO_EDIT",
                  todo: { ...todo, title: e.target.value },
                })
              }
            />
          </label>
        </div>
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </>
    );
  } else {
    /* non edit */
    todoContent = (
      <>
        <div className="flex items-center space-x-2">
          <Checkbox
            id={todo.id}
            checked={todo.isCompleted}
            onChange={(e) =>
              dispatch({
                type: "TODO_EDIT",
                todo: {
                  ...todo,
                  isCompleted: e.target.checked,
                },
              })
            }
          />
          <label
            htmlFor={todo.id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              { "line-through": todo.isCompleted }
            )}
          >
            {todo.title}
          </label>
        </div>

        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </>
    );
  }

  return (
    <li>
      <div className="items-top flex space-x-2">
        <div className="flex flex-row gap-1.5 leading-none w-full p-3">
          {todoContent}

          <Button
            className="ml-auto"
            onClick={(e) => dispatch({ type: "TODO_DELETE", id: todo.id })}
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
