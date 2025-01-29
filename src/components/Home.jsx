import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { SlCalender } from "react-icons/sl";
import Select from "react-select";
import countryList from "react-select-country-list";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState("00:00");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = countryList().getData();
  const countryOptions = countries.map((country) => ({
    value: country.value,
    label: (
      <div className="flex items-center gap-2">
        <img
          src={`https://flagcdn.com/w40/${country.value.toLowerCase()}.png`}
          alt={country.label}
          className="w-5 h-4"
        />
        {country.label}
      </div>
    ),
  }));
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img src="/banner.png" alt="Banner" width={1920} height={1080} />
      </div>
      <div className="w-[100%] border flex flex-col justify-center items-center h-screen">
        <div className="bg-[#000222] text-white text-center w-[70%] py-1">
          Searching for a Car Rental
        </div>
        <form className="grid grid-cols-3 gap-6 mt-4 w-[60%] text-white">
          <div className="mb-3 border ">
            <label
              className="block  text-sm font-medium mb-2 border"
              htmlFor="date-picker"
            >
              Pickup Date
            </label>
            <div className="flex align-middle border  ">
              <div className="bg-[#000222]  p-3 rounded-l-md">
                <SlCalender />
              </div>
              <DatePicker
                id="date-picker"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
                className="border p-2 rounded-r-md text-black text-sm w-[100%] opacity-40 "
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
            <div className="flex align-middle">
              <div className="bg-[#000222] p-3 rounded-l-md">
                <SlCalender />
              </div>
              <TimePicker
                className="border p-2 rounded-r-md  text-sm w-[100%] text-black bg-white opacity-40"
                onChange={setTime}
                value={time}
                format="hh:mm a"
                clockIcon={null}
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
              <Select
                className="border rounded-md text-sm w-[100%] text-black bg-white "
                classNamePrefix="custom-select"
                options={countryOptions}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="Select a country"
                isSearchable
                styles={{
                  control: (base) => ({
                    ...base,
                    height: "full",
                    border: "none",
                    boxShadow: "none",
                    opacity: 0.4,
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    backgroundColor: "#000222",
                    color: "white",
                    borderRadius: "0px 5px 5px 0px",
                    opacity: 1,
                  }),
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
