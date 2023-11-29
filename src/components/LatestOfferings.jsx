import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { latestOfferings } from "../data/data";

function LatestOfferings() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="w-full">

      <div className="max-w-7xl mx-auto p-5 flex flex-col gap-4">

        <h1 className="text-2xl font-bold">Latest Offerings</h1>
      <Carousel
        className="max-h-[400px] rounded-lg overflow-hidden"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {latestOfferings.map((item, index) => (
          <Carousel.Item className="w-full">
            <img
              className="w-full  h-[300px] sm:h-full sm:max-h-[400px] object-cover "
              src={item.imageUrl}
              alt=""
            />
            <Carousel.Caption>
              <h3 className="text-4xl font-bold">{item.name}</h3>
              <p className="text-xl">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      </div>
     
    </div>
  );
}

export default LatestOfferings;
