import React, { createContext } from "react";

export const AppContext = createContext();

const payload = {
  user: "tuna",
  isLoggedIn: true,
  boards: {
    todo: [
      {
        id: "1",
        title: "Learning Javascript",
        order: 1,
        status: "todo",
        label: "UI, Code",
      },
      {
        id: "2",
        title: "Learning Economist",
        order: 2,
        status: "todo",
        label: "Study",
      },
    ],
    doing: [
      {
        id: "1",
        title: "Learning Reactjs",
        order: 1,
        status: "doing",
        label: "UI, Code",
      },
    ],
    done: [
      {
        id: "1",
        title: "Learning TypeScript",
        order: 1,
        status: "done",
        label: "UI, Code",
      },
    ],
  },
};

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={payload}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
