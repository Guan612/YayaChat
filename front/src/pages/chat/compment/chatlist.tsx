import Avatar from "@mui/material/Avatar";
import canaryimg from "../../../assets/canary.jpg";

export default function ChatList() {
    return (
        <div className="bg-sky-500 flex flex-row hover:bg-sky-600 h-16 items-center">
            <Avatar className="m-1" alt="Remy Sharp" src={canaryimg} />
            <div className="flex flex-col">
                <div className="text-white font-bold">canary</div>
                <div className="text-gray-500">逆天</div>
            </div>
            <div className="flex-grow"></div>
            <div className="flex flex-col justify-end text-gray-600 pr-1">
                <div>昨天</div>
                <div className="text-gray-500 text-xs">12:00</div>
            </div>
        </div>
    );
}
