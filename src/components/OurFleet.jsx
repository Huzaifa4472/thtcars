import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cars = [
  { image: "/fleet1.png", name: "LEXUS LS-300" },
  { image: "/logo.png", name: "Toyota Camry" },
  { image: "/fleet1.png", name: "Honda Accord" },
  { image: "/fleet1.png", name: "Mercedes-Benz S-Class" },
  { image: "/fleet1.png", name: "BMW 7 Series" },
  { image: "/fleet1.png", name: "Audi A8" },
];

const OurFleet = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCars = [
    cars[(startIndex + cars.length - 2) % cars.length],
    cars[(startIndex + cars.length - 1) % cars.length],
    cars[startIndex],
    cars[(startIndex + 1) % cars.length],
    cars[(startIndex + 2) % cars.length],
  ];

  const handleLeftClick = () => {
    setStartIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleRightClick = () => {
    setStartIndex((prev) => (prev + 1) % cars.length);
  };

  return (
    <div className="w-full flex flex-col items-center my-28">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-full py-4">
        Our Fleet
      </div>

      <div className="w-[100%] flex justify-center items-center gap-6">
        <button
          onClick={handleLeftClick}
          className="text-white bg-[#F47013] px-3 py-2 rounded-md mx-4"
        >
          ←
        </button>

        <div className="flex gap-4 items-center relative">
          <AnimatePresence>
            {visibleCars.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, x: index === 2 ? 0 : 20 }}
                animate={{ opacity: 1, scale: index === 2 ? 1 : 0.85, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: index === 2 ? -20 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`flex flex-col gap-4 justify-center items-center transition-all duration-300 ${
                  index === 2
                    ? "w-1/5 bg-[#F47013] h-[50vh] rounded-b-full"
                    : "w-1/5 blur-sm"
                }`}
              >
                <img src={car.image} className="w-full" />
                {index === 2 && (
                  <div className="text-white bg-[#000222] py-1 px-2 rounded-md text-sm">
                    {car.name}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={handleRightClick}
          className="text-white bg-[#F47013] px-3 py-2 rounded-md mx-4"
        >
          →
        </button>
      </div>
      <div className="w-[90%] flex justify-end ">
        <button className="bg-[#F47013] text-white px-3 py-2 rounded-md ">
          View More
        </button>
      </div>
      <div className="flex justify-center gap-10  w-[100%]">
        <div className="flex flex-col justify-center items-center">
          <div className="border border-[#F47013] p-4 rounded-full h-20 w-20">
            <img src="/suv.png" />
          </div>
          <div className="flex items-center text-lg">
            <img src="/check.svg" />
            Sedan
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border border-[#F47013] p-4 rounded-full h-20 w-20">
            <img src="/suv.png" />
          </div>
          <div className="flex items-center text-lg">
            <img src="/check.svg" />
            Suv
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border border-[#F47013] p-4 rounded-full h-20 w-20">
            <img src="/suv.png" />
          </div>
          <div className="flex items-center text-lg">
            <img src="/check.svg" />
            Van
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="border border-[#F47013] p-4 rounded-full h-20 w-20">
            <img src="/suv.png" />
          </div>
          <div className="flex items-center text-lg">
            <img src="/check.svg" />
            +144 more
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFleet;
