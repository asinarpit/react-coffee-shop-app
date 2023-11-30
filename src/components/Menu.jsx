import React from "react";
import { menuItems } from "../data/data";

const Menu = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl p-5 mx-auto flex flex-col gap-4 ">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="grid md:grid-cols-4  gap-5 ">
          {menuItems.map((item, index) => (
            <div className="flex flex-col rounded-lg justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] duration-300">
              <img
                className="h-[200px] w-full object-cover rounded-t-lg"
                src={item.image}
                alt=""
              />

              <div className="flex flex-col p-3 justify-between">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-xs tracking-wide ">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-md font-bold">${item.price}</span>
                  <button className="px-3 py-2 whitespace-nowrap bg-yellow-950 hover:bg-yellow-900 rounded-full text-sm text-gray-200">
                    Add item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
