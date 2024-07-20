import SideIcon from "./compmnet/sideincon";

function Layout() {
    return (
        <div className="flex flex-row h-screen overflow-hidden">
            <div className="hidden md:block md:basis-1/5 flex-col bg-red-300">
                <SideIcon></SideIcon>
            </div>
            <div className="flex-1 md:basis-4/5 bg-blue-300">内容区</div>
        </div>
    );
}

export default Layout;
