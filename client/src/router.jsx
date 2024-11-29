import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Register from "./pages/Register";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

export default router;
