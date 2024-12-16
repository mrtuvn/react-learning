import { useState, createContext } from "react";

export const AppContextProvider = createContext(null);

export default function AppProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <AppContextProvider value={{ count, setCount }}>
      {children}
    </AppContextProvider>
  );
}
