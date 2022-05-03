import { Search } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <div className=" flex items-center bg-gray-200 w-[24.5rem] rounded-lg h-10 px-2">
      <Search sx={{ color: "#88898E" }} />
      <input
        placeholder="search here"
        type="text"
        className="bg-gray-200 w-full outline-none"
      />
    </div>
  );
};

export default SearchBar;
