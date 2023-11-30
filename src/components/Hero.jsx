import React from "react";
import heroIMG from "../assets/images/hero-img.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-[400px]">
      <div className="relative">
        <img
          src={heroIMG}
          className="w-full h-full object-cover max-h-[400px]"
          alt="coffee-beans"
        />

        {/* Overlay */}
        <div className="w-full h-full bg-black/50 absolute top-0 left-0 ">
          <div className="max-w-7xl  h-full mx-auto flex flex-col justify-center px-5">
            <p className="text-gray-200 text-3xl md:text-6xl  font-bold max-w-[400px]">
              Your Coffee. <span className="text-yellow-700">Your Way.</span>
            </p>
            <p className="text-gray-200 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              earum?
            </p>

            <button className="place-self-start px-4 py-2 bg-yellow-700 hover:bg-yellow-600 border-none rounded-md text-gray-200 mt-2">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
