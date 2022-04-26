import React from "react";
import RideSelector from "./RideSelector";

const Confirm = () => {
  const storeTripDetails = async () => {};
  return (
    <div className="flex-1 h-full flex flex-col justify-between">
      <div className="h-full flex flex-col overflow-scroll">
        <RideSelector />
      </div>
      <div className="border-t-2 cursor-pointer z-10">
        <div className="border-t-2 cursor-pointer z-10">
          <div
            onChange={() => storeTripDetails()}
            className="bg-black text-white py-4 m-4 text-center text-xl"
          >
            confirm Uber
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
