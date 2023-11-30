import React, { useState } from "react";
import { handpickedItems } from "../data/data";

const HandPicked = () => {
  const [selected, setSelected] = useState(null);

  const [clicked, setClicked] = useState(false);

  const handleSelection = (index) => {
    setSelected(index);
    setClicked(!clicked);
  };

  const handleOverlay = () => {
    setClicked(!clicked);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col p-5 gap-4">
        <h2 className="text-2xl font-bold">Handpicked for you</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          {handpickedItems.map((item, index) => (
            <div>
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

                <p
                  className={`text-sm ${
                    selected === index ? "font-semibold " : ""
                  }`}
                >
                  {item.name}
                </p>
              </div>

              {/* card + overlay */}

              {selected === index && clicked ? (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
                  <div className="flex z-40 flex-col rounded-lg overflow-hidden duration-300 m-5">
                    <img
                      className="h-[200px] w-full object-cover rounded-t-lg"
                      src={item.image}
                      alt=""
                    />

                    <div className="flex flex-col p-3 justify-between  bg-white">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-xs tracking-wide ">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center ">
                        <span className="text-md font-bold">${item.price}</span>
                        <button className="px-3 py-2 whitespace-nowrap bg-yellow-950 rounded-full text-sm text-gray-200">
                          Add item
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div
                    onClick={handleOverlay}
                    className="fixed top-0 z-30 left-0 w-screen h-screen bg-black/80"
                  ></div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandPicked;
