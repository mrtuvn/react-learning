import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CartProvider } from "./components/CartPage/CartContext";
import { UserProvider } from "./components/LoginPage/UserContext";
import DefaultLayout from "./layouts/DefaultLayout";

import routes from "@routes/routes";
import { ModalProvider } from "./contexts/modal/modalProvider";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalProvider>
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
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
