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
            lazy: () => import("../ui/HomeLayoutWithToolbar"),
            children: [
              {
                path: "score",
                lazy: () => import("../feature/score/ScoreList"),
              },
              {
                path: "student",
                lazy: () => import("../feature/student/StudentList"),
              },
            ],
          },
          {
            path: "profile",
            lazy: () => import("../feature/user/Profile"),
          },
        ],
      },

      // Auth
      {
        path: "auth",
        children: [
          {
            path: "login",
            lazy: () => import("../feature/auth/login"),
          },
          {
            path: "register",
            lazy: () => import("../feature/auth/Register"),
          },
        ],
      },

      // 404 Not found
      {
        path: "*",
        lazy: () => import("../ui/NotFound"),
      },
    ],
  },
]);
