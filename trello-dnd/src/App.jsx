import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TrelloBoard from "./components/TrelloBoard";
import AppContextProvider from "./contexts/AppContextProvider";
import viteLogo from "/vite.svg";

function App() {
  return (
    <AppContextProvider>
      <p>HERE</p>
      <TrelloBoard />
    </AppContextProvider>
  );
}

export default App;
