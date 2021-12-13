import {
  AccountCircleOutlined,
  CollectionsOutlined,
  HomeOutlined,
  Search,
  TrendingUpOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem Icon={HomeOutlined} title="HOME" />
        <HeaderItem Icon={TrendingUpOutlined} title="TRENDING" />
        <HeaderItem Icon={VerifiedOutlined} title="VERIFIED" />
        <HeaderItem Icon={CollectionsOutlined} title="COLLECTIONS" />
        <HeaderItem Icon={Search} title="SEARCH" />
        <HeaderItem Icon={AccountCircleOutlined} title="ACCOUNT" />
      </div>
      <Image
        className="object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hulu_logo_%282014%29.svg/1280px-Hulu_logo_%282014%29.svg.png"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
