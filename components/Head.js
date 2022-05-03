import {
  ArrowDropDown,
  Notifications,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const Head = () => {
  return (
    <div className="bg-white flex justify-between px-5 py-3 items-center">
      <div className="flex items-center">
        <p>starbucks</p>
        <ArrowDropDown />
      </div>
      <SearchBar />
      <div className="flex items-center space-x-2">
        <NotificationsOutlined />
        <Avatar />
        <p>John Doe</p>
        <ArrowDropDown />
      </div>
    </div>
  );
};

export default Head;
