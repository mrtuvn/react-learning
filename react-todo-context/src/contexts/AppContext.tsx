import {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
  ReactNode,
} from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext({});
export const TodosDispatchContext = createContext({});
export const ThemesContext = createContext({});

const intialTodos = [
  { id: uuidv4(), title: "Learn Javascript", isCompleted: true },
  { id: uuidv4(), title: "Learn Nextjs", isCompleted: true },
  { id: uuidv4(), title: "Learn Typescript", isCompleted: false },
];

export function useAppContext() {
  return useContext(AppContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}

function todosReducer(todos, action) {
  switch (action.type) {
    case "TODO_ADD": {
      return [
        ...todos,
        {
          id: action.id,
          title: action.title,
          isCompleted: false,
        },
      ];
    }
    case "TODO_EDIT": {
      console.log("run edit");
      return todos.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
        } else {
          return todo;
        }
      });
    }
    case "TODO_DELETE": {
      //console.log("action preview", action);
      return todos.filter((todo) => todo.id !== action.id);
    }
    case "TODO_CLEAR": {
      //console.log("action preview", action);
      return todos.splice(0, todos.length);
    }
  }
}

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todosReducer, intialTodos);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    let htmlElement = document.querySelector("html");
    setIsLightMode(!isLightMode);
    let classTheme = "";
    if (
      isLightMode ||
      (isLightMode && htmlElement.classList.contains("dark"))
    ) {
      if (htmlElement.classList.contains("dark"))
        htmlElement?.classList.remove("dark");
      classTheme = "light";
    } else if (!isLightMode || htmlElement.classList.contains("light")) {
      if (htmlElement.classList.contains("light"))
        htmlElement?.classList.remove("light");
      classTheme = "dark";
    }

    htmlElement.classList.toggle(classTheme);
  };

  useEffect(() => {
    //localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext value={{ todos }}>
      <ThemesContext value={{ isLightMode, setIsLightMode, toggleTheme }}>
        <TodosDispatchContext value={dispatch}>{children}</TodosDispatchContext>
      </ThemesContext>
    </AppContext>
  );
};

export default AppProvider;
