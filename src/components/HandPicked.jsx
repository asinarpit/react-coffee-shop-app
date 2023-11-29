import React, { useState } from "react";
import { handpickedItems } from "../data/data";

const HandPicked = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (index) => {
    setSelected(index);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col p-5 gap-4">
        <h2 className="text-2xl font-bold">Handpicked for you</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          {handpickedItems.map((item, index) => (

            // 
            <div
              onClick={() => handleSelection(index)}
              className="flex flex-col w-full h-full items-center text-center gap-2"
            >
              <div
                className={`w-[120px] h-[120px] rounded-full ${
                  selected === index ? "border-2 border-yellow-950 " : ""
                }`}
              >
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <p className={`text-sm ${selected === index ? 'font-semibold ' : ''}`}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandPicked;
