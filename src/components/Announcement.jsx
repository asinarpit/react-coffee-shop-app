import React from "react";

const Announcement = () => {
  return (
    <div className="w-full  bg-yellow-950">
      <div className="max-w-7xl h-20 mx-auto flex items-center px-5 justify-between">
        <p className="text-lg md:text-2xl text-gray-200 m-0">
          Reward are pouring! Keep visiting.
        </p>
        <button className="border-2 rounded-full whitespace-nowrap px-3 py-2 text-gray-200 text-sm">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Announcement;
