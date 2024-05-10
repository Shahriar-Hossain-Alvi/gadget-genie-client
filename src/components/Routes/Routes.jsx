import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services";
import AddService from "../Pages/AddService"
import ManageService from "../Pages/ManageService";
import BookedService from "../Pages/BookedService";
import TodoService from "../Pages/TodoService"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <AddService></AddService>
            },
            {
                path: "/manageService",
                element: <ManageService></ManageService>
            },
            {
                path: "/bookedService",
                element: <BookedService></BookedService>
            },
            {
                path: "/todoService",
                element: <TodoService></TodoService>
            }
        ]
    },
]);

export default router;