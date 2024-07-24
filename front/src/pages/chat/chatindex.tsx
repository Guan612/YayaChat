import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Badge from '@mui/material/Badge';

export default function ChatIndex() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row w-full bg-cyan-400 h-16 items-center">
                <div className="flex font-bold text-white text-2xl items-center p-2">
                    canary
                </div>
                <div className="flex-grow"></div>
                <div className="flex">
                    <PhoneOutlinedIcon fontSize="large" className="m-2 hover:bg-stone-500 rounded-lg"/>
                    <VideocamOutlinedIcon fontSize="large" className="m-2 hover:bg-stone-500 rounded-lg"/>
                    <ConnectedTvOutlinedIcon fontSize="large" className="m-2 hover:bg-stone-500 rounded-lg"/>
                    <MoreHorizOutlinedIcon fontSize="large" className="m-2 hover:bg-stone-500 rounded-lg"/>
                </div>
            </div>
            <div className="flex flex-col flex-grow">聊天区域</div>
            <div className="flex bg-cyan-400 h-32">
                <input className="flex-grow m-2 rounded-lg" placeholder="输入消息..."></input>
                <button className="bg-stone-500 m-2 rounded-lg">发送</button>
            </div>
        </div>
    );
}
