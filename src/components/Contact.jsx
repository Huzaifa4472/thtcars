import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-[100%]  flex flex-col justify-center items-center ">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-[100%] py-4 ">
        Contact Us
      </div>
      <div className="flex h-screen w-[100%]">
        <div className="absolute h-screen ">
          <img src="/TermsCover.png" alt="Banner" width={1920} height={1080} />
        </div>
        <div className="  absolute right-0 h-[100%] flex items-end  ">
          <img src="/contactCar.png" height={650} width={650} />
        </div>
        <div className="z-10 flex justify-center items-center min-h-screen  w-[100%] bg-transparent">
          <div className="rounded-lg p-8 w-full max-w-4xl">
            <form className=" flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full rounded-md p-2  bg-white  shadow-md opacity-70"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md p-2 bg-white shadow-md opacity-70 "
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 ">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md p-2 bg-white shadow-md opacity-70"
                  />
                </div>

                {/* Passengers */}
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="passengers"
                  >
                    Passengers
                  </label>
                  <input
                    type="number"
                    id="passengers"
                    className="w-full rounded-md p-2 bg-white shadow-md opacity-70"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="passengers"
                  >
                    Travel Plan
                  </label>
                  <select
                    id="travelPlan"
                    className="w-full rounded-md p-2 bg-white shadow-md opacity-70"
                  >
                    <option>2 Days</option>
                    <option>5 Days</option>
                    <option>7 Days</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="pickupDate"
                  >
                    Pickup Date
                  </label>
                  <div className="flex items-center rounded-md p-2 bg-white opacity-70 shadow-md ">
                    <input
                      type="date"
                      id="pickupDate"
                      className="w-full border-none outline-none ml-2 opacity-70"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="pickupTime"
                  >
                    Pickup Time
                  </label>
                  <div className="flex items-center rounded-md p-2 bg-white opacity-70 shadow-md ">
                    <input
                      type="time"
                      id="pickupTime"
                      className="w-full border-none outline-none ml-2 opacity-70"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="returnDate"
                  >
                    Return Date
                  </label>
                  <div className="flex items-center rounded-md p-2 bg-white opacity-70 shadow-md ">
                    <input
                      type="date"
                      id="returnDate"
                      className="w-full border-none outline-none ml-2 opacity-70"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="returnTime"
                  >
                    Return Time
                  </label>
                  <div className="flex items-center rounded-md p-2 bg-white opacity-70 shadow-md ">
                    <input
                      type="time"
                      id="returnTime"
                      className="w-full  ml-2 "
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="vehicleType"
                  >
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    className="w-full rounded-md p-2 bg-white shadow-md opacity-70"
                  >
                    <option>Car</option>
                    <option>Van</option>
                    <option>Bus</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="paymentMode"
                  >
                    Mode of Payment
                  </label>
                  <select
                    id="paymentMode"
                    className="w-full rounded-md p-2 bg-white shadow-md opacity-70"
                  >
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Online</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full rounded-md p-2 bg-white shadow-md opacity-70"
                ></textarea>
              </div>
              <div className="col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
