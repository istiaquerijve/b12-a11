import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../Pages/Home/Home";
import Registre from "../Pages/Auth/Registre";
import LogIn from "../Pages/Auth/LogIn";
import PrivateRoute from "./PrivateRoute";
import AllLoan from "../Pages/AllLone/AllLoan";
import Error from "../Component/Logo/Error";
import ApplyLoan from "../Pages/ApplyLone/ApplyLoan";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        },
        {
          path: "/register",
          Component: Registre
        },
        {
          path:"/login",
          Component: LogIn
        },
        {
          path: "/all-loan",
          element: <PrivateRoute><AllLoan/></PrivateRoute>,
          loader: () => fetch("../../public/loan.json")
        },
        {
          path: "/apply-loan",
          Component: ApplyLoan
        }
    ]
  },
]);