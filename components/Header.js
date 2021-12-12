import { Close, Mic, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";
const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex px-6 py-3 flex-grow ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl  items-center ">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
          />
          <Close
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <Mic className="h-6 mr-2 hidden sm:inline-flex text-blue-500 border-l-2  border-gray-300" />
          <Search className="h6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="cursor-pointer transition duration-150 transform hover:scale-110 ml-auto " />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
