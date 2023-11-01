
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings', 
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;