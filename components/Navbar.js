import { Avatar } from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const currentAccount = "0xA41BAB92a8E3731f4E16A9a1751369b55457df12";

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20">
      <div className="flex gap-3">
        <div className="text-3xl text-white flex cursor-pointer mr-16">
          Uber
        </div>
        <div className="text-lg text-white font-medium flex items-center mx-4 cursor-pointer">
          Ride
        </div>
        <div className="text-lg text-white font-medium flex items-center mx-4 cursor-pointer">
          Drive
        </div>
        <div className="text-lg t text-white font-medium flex items-center mx-4 cursor-pointer">
          More
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="">Help</div>
        <div className="">Anas</div>
        <div className="mr-2">
          <Avatar className="h-10 w-10 cursor-pointer object-cover rounded-full p-px !mportant" />
        </div>
        {currentAccount ? (
          <div>{`${currentAccount.slice(0, 6)}...${currentAccount.slice(
            39
          )}`}</div>
        ) : (
          <div>
            <button>
              <PersonOutlineIcon />
              <span className="">log in</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
