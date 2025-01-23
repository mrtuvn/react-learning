import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import AppContext from "./contexts/AppContext.jsx";
import CartContext from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppContext>
        <CartContext>
          <App />
        </CartContext>
      </AppContext>
    </BrowserRouter>
  </StrictMode>
);
