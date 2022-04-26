import React from "react";
import uberX from "../uberX.png";
import Image from "next/image";

const RideSelector = () => {
  const basePrice = 1000000;
  const carList = [
    {
      service: "uberX",
      image: uberX,
      price: 1,
    },
    {
      service: "uberX2",
      image: uberX,
      price: 1.5,
    },
    {
      service: "uberX3",
      image: uberX,
      price: 1.7,
    },
    {
      service: "uberX4",
      image: uberX,
      price: 2.3,
    },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="text-gray-500 text-center text-xs py-2 border-b">
        {" "}
        choose a ride or swipe up for more
      </div>
      <div className="flex flex-col flex-1 overflow-scroll">
        {carList.map((car, index) => (
          <div className="flex p-3 m-2 items-center border-2 border-white">
            <Image src={car.image} className="h-14" height={50} width={50} />
            <div className="ml-2 flex-1">
              <div className="font-medium">{car.service}</div>
              <div className="text-xs text-blue-500">5 min away</div>
            </div>
            <div className="flex items-center">
              <div className="mr-[-0.8rem]">
                {((basePrice / 10 ** 5) * car.price).toFixed(5)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
