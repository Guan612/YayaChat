import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

export default function SideIcon() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div>chat</div>
                <div>pepele</div>
                <Button variant="contained">Contained</Button>
            </div>
            <div className="flex flex-col">
                <Paper component="form">
                    <div className="flex flex-row">
                        <InputBase
                            placeholder="搜索"
                            inputProps={{ "aria-label": "搜索群聊" }}
                        />
                        <IconButton type="button" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                </Paper>
                <div>
                    <div>
                        Electronic Scavenger - V - BiliBili 超银河垃圾佬群
                    </div>
                </div>
                <div>
                    <div>canary</div>
                </div>
                <div>
                    <div>🐟塘</div>
                </div>
            </div>
        </div>
    );
}
