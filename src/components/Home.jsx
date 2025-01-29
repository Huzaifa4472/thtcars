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
  const [calendarOpen, setCalendarOpen] = useState(false);
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
  const handleCalendarIconClick = () => {
    setCalendarOpen((prev) => !prev);
  };
  const handleInputClick = () => {
    setCalendarOpen(true); // Open the calendar when the input field is clicked
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img src="/banner.png" alt="Banner" width={1920} height={1080} />
      </div>
      <div className="w-[100%]  flex flex-col justify-center items-center h-screen">
        <div className="bg-[#000222] text-white text-center w-[70%] py-2 rounded-md">
          Searching for a Car Rental
        </div>
        <form className=" mt-4 w-[60%] text-white">
          <div className="grid grid-cols-3 gap-6">
            <div className="mb-3">
              <label
                className="block text-sm font-medium mb-2 "
                htmlFor="date-picker"
              >
                Pickup Date
              </label>
              <div className="flex">
                <div
                  className="bg-[#000222] p-3 rounded-l-md"
                  onClick={handleCalendarIconClick}
                >
                  <SlCalender />
                </div>
                <DatePicker
                  id="date-picker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                  open={calendarOpen}
                  onClickOutside={() => setCalendarOpen(false)}
                  nClick={handleInputClick}
                  className="border p-2 rounded-r-md text-black text-sm w-[30vh] opacity-40 "
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
                  className="border rounded-md text-sm w-[100%] text-black bg-white opacity-40"
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
            <div className="mb-3">
              <label
                className="block text-sm font-medium mb-2 "
                htmlFor="date-picker"
              >
                Return Date
              </label>
              <div className="flex">
                <div
                  className="bg-[#000222] p-3 rounded-l-md"
                  onClick={handleCalendarIconClick}
                >
                  <SlCalender />
                </div>
                <DatePicker
                  id="date-picker"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                  open={calendarOpen}
                  onClickOutside={() => setCalendarOpen(false)}
                  nClick={handleInputClick}
                  className="border p-2 rounded-r-md text-black text-sm w-[30vh] opacity-40 "
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                className="block  text-sm font-medium mb-2"
                htmlFor="date-picker"
              >
                Return Time
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
                Return Location
              </label>
              <div className="flex align-middle">
                <Select
                  className="border rounded-md text-sm w-[100%] text-black bg-white opacity-40"
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
          </div>

          <div className="mt-8 w-[100%] flex justify-center align-center">
            <button
              className="bg-[#000222] w-36 hover:bg-transparent border border-[#000222] text-white font-semiBold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
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
