import { useRoutes, Navigate } from "react-router-dom";
import Layout from "../layout";

const routers = [
    {
        path: "/",
        element: <Layout />,
    },
];

export default function Router() {
    return useRoutes(routers);
}
