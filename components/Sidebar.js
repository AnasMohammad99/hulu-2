import {
  ArticleOutlined,
  DocumentScannerOutlined,
  HomeOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  const buttonsData = [
    {
      title: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      title: "Inventory",
      icon: <ArticleOutlined />,
    },
    {
      title: "Documents",
      icon: <DocumentScannerOutlined />,
    },
    {
      title: "Settings",
      icon: <SettingsOutlined />,
    },
  ];
  return (
    <div className=" mt-8 ">
      {buttonsData.map((item) => (
        <div className="w-full text-center">
          <button className="hover:bg-white hover:text-green-400 text-gray-500 font-bold   px-4 py-2 w-[75%]  rounded inline-flex items-center">
            {item.icon}
            <span className="pl-2 font-semibold">{item.title}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
