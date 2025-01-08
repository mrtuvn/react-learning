// router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import InterviewLayout from "../layouts/interview/InterviewLayout";
import Interview2Layout from "../layouts/interview2/Interview2Layout";
import Interview1 from "../pages/interview/Interview1";
import Interview2 from "../pages/interview2/Interview2";
import ElectricStore from "../pages/interview/components/ElectricStore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InterviewLayout />,
    children: [],
  },
  {
    path: "interview1",
    element: <InterviewLayout />,
    children: [
      {
        path: "/interview1",
        element: <Interview1 />,
      },
      {
        path: "electronic-store",
        children: [
          {
            element: <ElectricStore />,
          },
        ],
      },
    ],
  },
  {
    path: "interview2",
    element: <Interview2Layout />,
    children: [
      {
        path: "/interview2",
        element: <Interview2 />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
