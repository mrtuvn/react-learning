import Todo from "@/components/Todo/Todo";
import { useAppContext, useTodosDispatch } from "@/contexts/AppContext";
import { Button } from "../ui/button";

const TodoLists = () => {
  const appContext = useAppContext();
  const dispatch = useTodosDispatch();
  const todos = appContext.todos;

  return (
    <>
      <ul className="list-none flex flex-col gap-2">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>

      <Button
        className="text-right"
        onClick={(e) =>
          dispatch({
            type: "TODO_CLEAR",
          })
        }
      >
        Delete All
      </Button>
    </>
  );
};

export default TodoLists;
