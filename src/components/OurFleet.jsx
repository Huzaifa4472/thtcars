import React from "react";

const OurFleet = () => {
  return (
    <div className="w-full  flex flex-col items-center my-28">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-full py-4">
        Our Fleet
      </div>
      <div className="w-[100%]">
        <div className="flex gap-4 mb-4">
          <div className=" flex flex-col gap-4 justify-center items-center blur-sm w-1/5">
            <img src="/fleet1.png" />
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center blur-sm w-1/5">
            <img src="/fleet1.png" />
          </div>
          <div className=" w-1/5 flex flex-col gap-4 justify-center items-center rounded-b-full bg-[#F47013] h-[50vh]">
            <img src="/fleet1.png" />
            <div className="text-white bg-[#000222] py-1 px-2 rounded-md text-sm">
              LEXUS LS-300
            </div>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center blur-sm w-1/5">
            <img src="/fleet1.png" />
          </div>{" "}
          <div className=" flex flex-col gap-4 justify-center items-center blur-sm w-1/5">
            <img src="/fleet1.png" />
          </div>
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
    </div>
  );
};

export default OurFleet;
