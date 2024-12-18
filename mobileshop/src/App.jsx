import React from "react";
import {
  BrowserRouter,
  redirect,
  Route,
  Routes,
  useNavigate,
} from "react-router";

import { CartProvider } from "./components/CartPage/CartContext";
import { UserProvider } from "./components/LoginPage/UserContext";
import DefaultLayout from "./layouts/DefaultLayout";

import routes from "@routes/routes";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <DefaultLayout>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </DefaultLayout>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
