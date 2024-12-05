import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import demoImage from "/demo.webp";
import { v4 as uuidv4 } from "uuid";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./components/ui/button";

import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoLists from "./components/TodoLists/TodoLists";
import TodoForm from "./components/TodoForm/TodoForm";

const todos = [
  { id: uuidv4(), title: "Learn Javascript", isCompleted: true },
  { id: uuidv4(), title: "Learn Nextjs", isCompleted: false },
  { id: uuidv4(), title: "Learn Typescript", isCompleted: false },
];

function App() {
  // const [todos, setTodos] = useState([
  //   { id: uuidv4(), title: "Learn Javascript", isCompleted: true },
  //   { id: uuidv4(), title: "Learn Nextjs", isCompleted: false },
  //   { id: uuidv4(), title: "Learn Typescript", isCompleted: false },
  // ]);

  return (
    <>
      <div>
        <h1>Demo</h1>

        <img src={demoImage} alt="demo " />

        <hr className="my-3" />

        <h2 className="text-left font-extrabold">Todo Tracker</h2>

        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all" onClick={() => {}}>
              All
            </TabsTrigger>
            <TabsTrigger value="completed" onClick={() => {}}>
              Completed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div>
              <TodoForm />
              <TodoLists todos={todos} />

              <Button className="text-right" onClick={() => {}}>
                Delete All
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="completed">
            <TodoSearch />

            <TodoLists todos={todos} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default App;
