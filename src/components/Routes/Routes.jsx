import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services";
import AddService from "../Pages/AddService"
import ManageService from "../Pages/ManageService";
import BookedService from "../Pages/BookedService";
import TodoService from "../Pages/TodoService"
import Register from "../Pages/HandleUser/Register";
import Login from "../Pages/HandleUser/Login";
import ErrorPage from "../Layout/ErrorPage";
import UserProfile from "../Pages/HandleUser/UserProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/manageService",
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path: "/bookedService",
                element: <PrivateRoute><BookedService></BookedService></PrivateRoute>
            },
            {
                path: "/todoService",
                element: <PrivateRoute><TodoService></TodoService></PrivateRoute>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/userProfile",
                element: <UserProfile></UserProfile>
            }
        ]
    },
]);

export default router;