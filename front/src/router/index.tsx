import { useRoutes, Navigate } from "react-router-dom";
import Layout from "../layout";
import { Children } from "react";
import WelcomePage from "../pages/welcomepage";
import Chat from "../pages/chat";

const routers = [
    {
        path: "/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <WelcomePage/>
            },
            {
                path: "/chat",
                element: <Chat/>
            }
        ]
    }
]

export default function Router() {
    return useRoutes(routers)
}