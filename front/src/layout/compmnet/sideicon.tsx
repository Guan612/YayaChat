import Avatar from "@mui/material/Avatar";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink } from "react-router-dom";

import piyaimg from "../../assets/piya.jpg";

export default function SideIcon() {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="pt-2">
                <Avatar
                    alt="piya"
                    sx={{ width: 56, height: 56 }}
                    src={piyaimg}
                />
            </div>
            <div>
                <div className="py-4">
                    <NavLink to="/chat">
                        <SmsOutlinedIcon
                            className=" bg-blue-300 rounded-md hover:scale-125"
                            fontSize="large"
                        />
                    </NavLink>
                </div>
                <div className="py-4">
                    <PeopleAltOutlinedIcon
                        className=" bg-blue-300 rounded-md hover:scale-125"
                        fontSize="large"
                    />
                </div>
                {/* <div className="flex-grow"></div> */}
                <div className="py-4">
                    <SettingsOutlinedIcon
                        className=" bg-blue-300 rounded-md hover:scale-125"
                        fontSize="large"
                    />
                </div>
            </div>
        </div>
    );
}
