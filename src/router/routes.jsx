import {
    createBrowserRouter,
} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Spinner from "../components/ui/Spinner";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch('./about.json'),
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);
export default router