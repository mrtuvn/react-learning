import { createBrowserRouter, RouterProvider } from "react-router";

// Contexts
import AppContextProvider from "../contexts/AppContextProvider";
import { ThemeProvider } from "../contexts/ThemeProvider";

// Layouts
import BaseLayout from "../layouts/BaseLayout";

// Pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContextProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <BaseLayout />
        </ThemeProvider>
      </AppContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
