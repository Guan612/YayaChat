import SideIcon from "./compmnet/sideicon";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-row h-screen overflow-hidden">
            <div className="hidden md:block md:basis-1/12 flex-col bg-red-300">
                <SideIcon />
            </div>
            <div className="flex-1 md:basis-11/12 bg-blue-300">
                <Outlet />
            </div>
        </div>
    );
}
