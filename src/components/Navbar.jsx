import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { PiPackage, PiUserCircleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  IoIosClose,
  IoMdGift,
  IoMdCart,
  IoMdCash,
  IoMdHome,
} from "react-icons/io";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  // function to add bottom border to list items on click
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row p-5 gap-5 items-center justify-between">
        {/* Overlay */}
        {nav ? (
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/60 md:hidden"></div>
        ) : (
          ""
        )}
        {/* side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 bg-yellow-950 h-full w-[300px] duration-300 z-10 md:hidden"
              : "fixed top-0 left-[-100%]  bg-yellow-950 h-full w-[300px] duration-300 z-10"
          }
        >
          <IoIosClose
            size={35}
            className="absolute top-5 z-10 right-5 text-gray-200"
            onClick={() => setNav(!nav)}
          />

          <ul className="flex flex-col justify-center px-10 py-20 gap-5">
            <li className="flex items-center gap-2 text-lg font-semibold text-gray-200">
              <IoMdHome size={30} />
              Home
            </li>
            <li className="flex items-center gap-2 text-lg font-semibold text-gray-200">
              <IoMdGift size={30} />
              Gift
            </li>
            <li className="flex items-center gap-2 text-lg font-semibold text-gray-200">
              <PiPackage size={30} />
              Order
            </li>
            <li className="flex items-center gap-2 text-lg font-semibold text-gray-200">
              <IoMdCash size={30} />
              Pay
            </li>
            <li className="flex items-center gap-2 text-lg font-semibold text-gray-200">
              <IoMdCart size={30} />
              Store
            </li>
          </ul>
        </div>

        {/* Left side */}
        <div className="flex gap-10 items-center w-full justify-between md:justify-normal">
          <HiOutlineMenuAlt1
            size={30}
            className="cursor-pointer  md:hidden"
            onClick={() => setNav(!nav)}
          />
          <img className="h-20" src={logo} alt="company logo" />

          <ul className="hidden md:flex gap-5 text-sm">
            <li
              onClick={() => handleItemClick(0)}
              className={`indicator pb-2  ${
                activeItem === 0 ? "active font-semibold" : ""
              }`}
            >
              Home
            </li>
            <li
              onClick={() => handleItemClick(1)}
              className={`indicator pb-2  ${
                activeItem === 1 ? "active font-semibold" : ""
              }`}
            >
              Gift
            </li>
            <li
              onClick={() => handleItemClick(2)}
              className={`indicator pb-2  ${
                activeItem === 2 ? "active font-semibold" : ""
              }`}
            >
              Order
            </li>
            <li
              onClick={() => handleItemClick(3)}
              className={`indicator pb-2  ${
                activeItem === 3 ? "active font-semibold" : ""
              }`}
            >
              Pay
            </li>
            <li
              onClick={() => handleItemClick(4)}
              className={`indicator pb-2  ${
                activeItem === 4 ? "active font-semibold" : ""
              }`}
            >
              Store
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex w-full max-w-[350px] justify-between gap-4 ">
          {/* input container */}
          <div className="rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center px-3 w-full">
            <CiSearch size={25} className="cursor-pointer" />
            <input
              className="w-full text-xs px-2 outline-none"
              type="text"
              placeholder="Looking for something specific?"
            />
          </div>
          <div>
            <PiUserCircleThin size={50} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
