// router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DefaultLayout from "../layouts/default/layout";
import AppProvider from "../contexts/AppContextProvider";

import CartPage from "../pages/cart";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <DefaultLayout />
      </AppProvider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
