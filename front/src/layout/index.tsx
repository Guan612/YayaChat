import SideIcon from "./compmnet/sideincon";

function Layout() {
    return (
        <div className="flex flex-row h-screen overflow-hidden">
            <div className="hidden md:block md:basis-1/4 flex-col bg-red-300">
                <SideIcon></SideIcon>
            </div>
            <div className="flex-1 md:basis-3/4 bg-blue-300">内容区</div>
        </div>
    );
}

export default Layout;
