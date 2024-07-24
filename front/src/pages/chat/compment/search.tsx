import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

export default function Search() {
    return (
        <div className="flex h-16 bg-sky-300 items-center">
            <div className="flex h-12 bg-slate-300 rounded-lg items-center mx-4">
                <InputBase
                    className="p-1"
                    placeholder="搜索"
                    // inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton type="button" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
    );
}
