// src/app/router/routes.tsx

import { AppLayout } from "@/components";
import { BeepPage, HomePage, NotFoundPage, QuizPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export enum RoutePath {
  Home = "/",
  Quizzes = "/quizzes",
  QuizDetails = "/quizzes/:quizId",
  QuizResults = "/quizzes/:quizId/results",
}

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: RoutePath.Home, element: <HomePage /> },
      { path: RoutePath.Quizzes, element: <QuizPage /> }, // PLP
      { path: RoutePath.QuizDetails, element: <div /> }, // PDP
      { path: RoutePath.QuizResults, element: <div /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "/beep", element: <BeepPage /> },
    ],
  },
]);
