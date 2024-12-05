import React from "react";

const TodoLists = ({ todos }) => {
  return (
    <ul className="list-none flex flex-col gap-2">
      {todos.map((todo) => {
        return (
          <li>
            <div className="items-top flex space-x-2">
              <div className="flex flex-row gap-1.5 leading-none w-full p-3">
                <label
                  htmlFor={todo.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {todo.title}
                </label>

                <button className="ml-auto">remove</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoLists;
