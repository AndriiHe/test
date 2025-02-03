import React from "react";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";

import type { RouteObject } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PreviewPage } from "./pages/PreviewPage";

export const paths = {
  Home: "",
  Preview: "preview",
} as const;

const routes: RouteObject[] = [
  {
    path: paths.Home,
    element: <HomePage />,
  },
  {
    path: paths.Preview,
    element: <PreviewPage />,
  },
];

export function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
