import React from "react";
import SearchBar from "./SearchBar";
import TableFeatures from "./TableFeatures";

const Body = () => {
  return (
    <div className="ml-6 mr-6 mt-6 rounded-3xl">
      <div className="py-8 pl-4 bg-black">
        <SearchBar />
      </div>
      <div className="bg-red-500">
        <TableFeatures />
      </div>
    </div>
  );
};

export default Body;
