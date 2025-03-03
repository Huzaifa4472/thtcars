import React from "react";

const Home = () => {
  return (
    <div>
      <div className="absolute  -z-10">
        <img src="/banner.png" alt="Banner" width={1920} height={1080} />
      </div>
      <div className="absolute bottom-0 -z-10 flex w-[100%] items-center justify-center mt-10">
        <img src="/bannersCars.png" alt="Banner" width={1020} height={780} />
      </div>
      <div className="w-[100%]  flex flex-col justify-center items-center h-screen">
        <div className="bg-[#000222] text-xl text-white text-center w-[70%] py-2 rounded-t-md">
          Searching for a Car Rental
        </div>
        <form className=" w-[70%] bg-[#f471137a] rounded-b-md pb-6 flex flex-col items-center ">
          <div className="grid grid-cols-3 gap-6 w-[70%] mt-6 text-white text-sm">
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

          <div className="mt-8 w-[100%] flex justify-center align-center">
            <button
              className="bg-[#000222] w-36  border border-[#000222] text-white font-semiBold py-2 px-4 rounded-md "
              type="button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
