import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "../ui/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    // Routing protection
    // errorElement
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        lazy: () => import("../ui/Home"),
        children: [
          { index: true, element: <Navigate to="score" replace /> },
          {
            // just show toolbar
            // element: <></>,
            children: [
              {
                path: "score",
                element: <div>Score</div>,
              },
              {
                path: "student",
                lazy: () => import("../feature/student/StudentList"),
              },
            ],
          },
        ],
      },
      {
        path: "profile",
        element: <div>profile</div>,
      },

      // Auth
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <div>login</div>,
          },
          {
            path: "register",
            element: <div>register</div>,
          },
        ],
      },

      // 404 Not found
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);
