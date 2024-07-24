import ChatList from "./compment/chatlist";
import ChatIndex from "./chatindex";
import Search from "./compment/search";
export default function Chat() {
    return (
        <div className="flex flex-row h-screen">
            <div className="flex flex-col w-1/5 bg-gray-100">
                <Search/>
                <ChatList/>
            </div>
            <div className="flex flex-col w-4/5">
                <ChatIndex/>
            </div>
        </div>
    )
}