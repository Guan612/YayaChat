import Avatar from "@mui/material/Avatar";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function SideIcon() {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="pt-2">
                <Avatar
                    alt="piya"
                    sx={{ width: 56, height: 56 }}
                    src="https://ice.frostsky.com/2024/07/23/0ed2f96104cbf41ed681d6ce6c3e4e84.jpeg"
                />
            </div>
            <div>
                <div className="py-4">
                    <SmsOutlinedIcon
                        className=" bg-blue-300 rounded-md hover:scale-125"
                        fontSize="large"
                    />
                </div>
                <div className="py-4">
                    <PeopleAltOutlinedIcon
                        className=" bg-blue-300 rounded-md hover:scale-125"
                        fontSize="large"
                    />
                </div>
            </div>
            {/* <div className="flex-grow"></div> */}
            <div className="py-4">
                <SettingsOutlinedIcon
                    className=" bg-blue-300 rounded-md hover:scale-125"
                    fontSize="large"
                />
            </div>
        </div>
    );
}
