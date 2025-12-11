import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../Pages/Home/Home";
import Registre from "../Pages/Auth/Registre";
import LogIn from "../Pages/Auth/LogIn";
import PrivateRoute from "./PrivateRoute";
import AllLoan from "../Pages/AllLone/AllLoan";
import Error from "../Component/Logo/Error";
import ApplyLoan from "../Pages/ApplyLone/ApplyLoan";
import Dashboard from "../layout/Dashboard";
import MyLoan from "../Pages/Dashboard/MyLoan";
import UserAvatar from "../Pages/Dashboard/UserAvatar";

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
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: "my-loan",
        Component: MyLoan
      },
      {
        path: "user-avatar",
        Component: UserAvatar
      }
    ]
  }
]);