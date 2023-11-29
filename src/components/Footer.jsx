import React from "react";
import logo from "../assets/images/logo.png";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-yellow-950">
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-2  md:grid-cols-5 gap-5 text-gray-200">
        <div>
          <img className="h-28" src={logo} alt="logo" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg ">About Us</h2>
          <ul className="text-sm m-0 p-0 leading-10">
            <li>Coffeehouse</li>
            <li>Our Heritage</li>
            <li>Our Company</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg ">Responsibility</h2>
          <ul className="text-sm m-0 p-0 leading-10">
            <li>Community</li>
            <li>Ethical Sourcing</li>
            <li>Environmental Stewardship</li>
            <li>Diversity</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg ">Quick Link</h2>
          <ul className="text-sm m-0 p-0 leading-10">
            <li>Privacy Policy</li>
            <li>Delivery</li>
            <li>Seasons's Gifting</li>
            <li>Customer Service</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg">Social Media</h2>
          <div className="flex gap-2">
            <RiFacebookBoxFill className="cursor-pointer" size={30} />
            <RiInstagramFill className="cursor-pointer" size={30} />
            <RiTwitterXFill className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
