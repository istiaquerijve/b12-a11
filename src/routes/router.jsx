import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../Pages/Home/Home";
import Registre from "../Pages/Auth/Registre";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        },
        {
          path: "/register",
          Component: Registre
        }
    ]
  },
]);