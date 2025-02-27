import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";

const reviews = [
  {
    name: "John Doe",
    designation: "Graphic Designer",
    title: "Sendly is the Most Professional",
    comment: "Excellent service! Highly recommend.",
  },
  {
    name: "Jane Smith",
    designation: "Graphic Designer",
    title: "Sendly is the Most Professional",
    comment: "Very professional and friendly staff.",
  },
  {
    name: "Michael Johnson",
    designation: "Graphic Designer",
    title: "Sendly is the Most Professional",

    comment: "Great experience, will come back!",
  },
  {
    name: "Emily Davis",
    designation: "Graphic Designer",
    title: "Sendly is the Most Professional",

    comment: "Loved the service, amazing staff!",
  },
  {
    name: "Chris Brown",
    designation: "Graphic Designer",
    title: "Sendly is the Most Professional",

    comment: "The best experience I’ve had so far!",
  },
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center my-28">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-full py-4">
        REVIEWS FROM SATISFIED CUSTOMERS
      </div>
      <div className="relative w-[100%] mt-28 overflow-hidden">
        <div
          className="flex gap-4 justify-center transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // Move in a sliding manner
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#F47013] p-6  rounded-lg shadow-lg w-[33.33%] flex-shrink-0 text-center text-white"
            >
              <h3 className="text-md font-medium ">{review.title}</h3>
              <p className="text-sm italic mt-4">"{review.comment}"</p>
              <div className="flex mt-20 ">
                <div className="bg-[#000222] py-3 w-1/5 rounded-l-md flex justify-center items-center">
                  <HiOutlineUser size={30} />
                </div>
                <div className="bg-[#FECDAA] w-4/5 text-black text-left flex flex-col items-start justify-center pl-3 rounded-r-md">
                  <h3 className="text-sm font-semibold ">{review.name}</h3>
                  <h6 className="text-xs ">{review.designation}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevReview}
          className="absolute top-1/2 left-0s -translate-y-1/2 p-2 "
        >
          <MdKeyboardArrowLeft size={54} />
        </button>
        <button
          onClick={nextReview}
          className="absolute top-1/2 right-2 -translate-y-1/2 "
        >
          <MdChevronRight size={54} />
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {Array.from({ length: reviews.length - 2 }, (_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i === currentIndex ? "bg-[#F47013]" : "bg-[#F3B68B]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default CustomerReview;
