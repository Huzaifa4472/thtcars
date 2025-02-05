import React from "react";
import NavItem from "../components/NavItem";

const reservations = () => {
  return (
    <div>
      <NavItem />
      <div className="absolute top-56  -z-10">
        <img
          src="/graybackground.png"
          alt="Banner"
          width={1920}
          height={1080}
        />
      </div>
      <div className="w-[100%]  flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-14 w-14  flex justify-center items-center border-2 border-black rounded-md font-bold text-4xl">
              1
            </div>
            <div>Dates</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-14 w-14  flex justify-center items-center border-2 border-black rounded-md font-bold text-4xl">
              2
            </div>
            <div>Vehicles</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-14 w-14  flex justify-center items-center border-2 border-black rounded-md font-bold text-4xl">
              3
            </div>
            <div>Features</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-14 w-14  flex justify-center items-center border-2 border-black rounded-md font-bold text-4xl">
              4
            </div>
            <div>Customer</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-14 w-14  flex justify-center items-center border-2 border-black rounded-md font-bold text-4xl">
              5
            </div>
            <div>Confirm</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-14 w-14  flex justify-center items-center border-2 border-black rounded-md font-bold text-4xl">
              6
            </div>
            <div>Payments</div>
          </div>
        </div>
        <form className=" flex flex-col items-center w-[70%]">
          <div className="grid grid-cols-3 gap-6 w-[100%] mt-6 text-white text-sm">
            <div className="mb-3 ">
              <label className="block text-sm  font-medium mb-2 ">
                Pickup Date
              </label>
              <div className="flex items-center rounded-md p-2 bg-white opacity-70 shadow-md ">
                <input
                  type="date"
                  id="pickupDate"
                  className="w-full text-black border-none outline-none ml-2"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                className="block  text-sm font-medium mb-2"
                htmlFor="date-picker"
              >
                Pickup Time
              </label>
              <div className="flex items-center rounded-md p-2 opacity-70 bg-white shadow-md ">
                <input
                  type="time"
                  id="pickupTime"
                  className="w-full border-none outline-none ml-2  text-black"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                className="block  text-sm font-medium mb-2"
                htmlFor="date-picker"
              >
                Pickup Location
              </label>
              <div className="flex align-middle">
                <select
                  id="vehicleType"
                  className="w-full rounded-md p-2 bg-white shadow-md opacity-70 text-black"
                >
                  <option>Free Pickup Location 10Min from IAH@77032</option>
                  <option>(IAH)George W.Bush Airport</option>
                  <option>
                    Delivery (Only 10miles radius from 5719 Edward Dr Houston)
                  </option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label
                className="block text-sm font-medium mb-2 "
                htmlFor="date-picker"
              >
                Return Date
              </label>
              <div className="flex items-center rounded-md p-2 bg-white opacity-70 shadow-md ">
                <input
                  type="date"
                  id="pickupDate"
                  className="w-full border-none outline-none ml-2 text-black"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block  text-sm font-medium mb-2">
                Return Time
              </label>
              <div className="flex items-center rounded-md p-2 bg-white shadow-md opacity-70 ">
                <input
                  type="time"
                  id="pickupTime"
                  className="w-full border-none outline-none ml-2 text-black"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                className="block  text-sm font-medium mb-2"
                htmlFor="date-picker"
              >
                Return Location
              </label>
              <div className="flex align-middle">
                <select
                  id="vehicleType"
                  className="w-full rounded-md p-2 bg-white shadow-md text-black opacity-70 "
                >
                  <option>Free Pickup Location 10Min from IAH@77032</option>
                  <option>(IAH)George W.Bush Airport</option>
                  <option>
                    Delivery (Only 10miles radius from 5719 Edward Dr Houston)
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 w-[100%] flex justify-end align-end">
            <button
              className="bg-[#000222] w-36  border border-[#000222] text-white font-semiBold py-2 px-4 rounded-md "
              type="button"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reservations;
