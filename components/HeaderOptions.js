import {
  Map,
  MoreVert,
  Newspaper,
  Photo,
  Search,
  VideoCall,
} from "@mui/icons-material";
import HeaderOption from "./HeaderOption";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption Icon={Search} title="All" selected />
        <HeaderOption Icon={Photo} title="Images" />
        <HeaderOption Icon={VideoCall} title="Videos" />
        <HeaderOption Icon={Newspaper} title="News" />
        <HeaderOption Icon={Map} title="Maps" />
        <HeaderOption Icon={MoreVert} title="More" />
      </div>
      <div className="flex space-x-4">
        <p>Settings</p>
        <p>Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
