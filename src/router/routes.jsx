import {
    createBrowserRouter,
} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            
        ]
    },
]);
export default router