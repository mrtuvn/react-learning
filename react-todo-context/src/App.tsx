import "./App.css";
import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import demoImage from "/demo.webp";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./components/ui/button";

import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoLists from "./components/TodoLists/TodoLists";
import TodoForm from "./components/TodoForm/TodoForm";
import AppProvider, { useTodosDispatch } from "./contexts/AppContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TodoFilterLists from "./components/TodoFilterLists/TodoFilterLists";

function App() {
  const dispatch = useTodosDispatch();

  return (
    <>
      <AppProvider>
        <ThemeSwitcher />

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
              <TodoLists />
            </div>
          </TabsContent>
          <TabsContent value="completed">
            <TodoSearch />
            <TodoFilterLists />
          </TabsContent>
        </Tabs>
      </AppProvider>
    </>
  );
}

export default App;
