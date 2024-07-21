import { useRoutes, Navigate } from "react-router-dom";
import Layout from "../layout";
import Chat from "../pages/chat";

const routers = [
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Chat/>
            }
        ]
    },
];

export default function Router() {
    return useRoutes(routers);
}
