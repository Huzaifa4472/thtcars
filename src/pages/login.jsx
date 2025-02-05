import React from "react";
import NavItem from "../components/NavItem";
import { IoMail } from "react-icons/io5";

const login = () => {
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
      <div className="w-[90%]  flex flex-col justify-center items-end h-screen">
        <div className="  absolute left-0 h-[100%] flex items-end  ">
          <img src="/loginCar.png" height={500} width={500} />
        </div>
        <form className=" flex flex-col items-end justify-end w-1/2  z-10">
          <div className="gap-6 w-[100%] mt-6 text-sm">
            <button
              className="bg-[#000222] mb-4 flex items-center gap-2 border border-[#000222] text-white font-semiBold py-2 px-4 rounded-md "
              type="button"
            >
              <IoMail />
              Sign in with Email
            </button>
            <div className="mb-3 ">
              <label className="block text-sm  font-medium mb-2 ">
                Reservation Number or Booking Code{" "}
              </label>
              <div className="flex items-center rounded-md p-2 bg-white opacity-70 shadow-md ">
                <input
                  type="text"
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
                Email
              </label>
              <div className="flex items-center rounded-md p-2 opacity-70 bg-white shadow-md ">
                <input
                  type="text"
                  id="pickupTime"
                  className="w-full border-none outline-none ml-2  text-black"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 w-[100%] flex justify-end gap-4 text-sm align-end">
            <button
              className="bg-[#000222]   border border-[#000222] text-white font-semiBold py-2 px-4 rounded-md "
              type="button"
            >
              find My Booking
            </button>
            <button
              className="bg-[#000222]  border border-[#000222] text-white font-semiBold py-2 px-4 rounded-md "
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
