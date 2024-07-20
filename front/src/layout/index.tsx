function Layout() {
    return (
        <div className="flex flex-row">
            <div className="flex-1 basis-1/4 bg-red-300">侧边栏</div>
            <div className="flex-1 basis-3/4 bg-blue-300">内容区</div>
        </div>
    );
}

export default Layout;
