import React, { useState } from "react";

const LocationSelection = () => {
  const [inFocus, setInFocus] = useState("from");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  return (
    <div className="pt-2">
      <div className="w-full font-bold text-left flex items-center text-3xl p-3 overflow-hidden">
        {inFocus === "from" ? "where can we pick you up" : "where to"}
      </div>
      <div className="flex flex-col mb-4 relative">
        <div
          className={`h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2 ${
            inFocus === "from" && "border-black"
          }`}
        >
          <div className="mx-1">
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full"
            placeholder="enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={(e) => setInFocus("from")}
          />
        </div>
        <div className="w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]"></div>
        <div
          className={`h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2 ${
            inFocus === "to" && `border-black`
          }`}
        >
          <div className="mx-1">
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10h-4v4h4v-4zM7 7v10h10V7H7z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full"
            placeholder="where to"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            onFocus={(e) => setInFocus("to")}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSelection;
