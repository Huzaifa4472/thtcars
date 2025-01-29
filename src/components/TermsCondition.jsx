import React from "react";

const TermsCondition = () => {
  return (
    <div className="w-[100%] mt-28 flex flex-col justify-center items-center h-screen">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-[100%] py-4">
        Terms & Conditions
      </div>
      <div className="flex w-[100%]">
        <div className="absolute ">
          <img src="/TermsCover.png" alt="Banner" width={1920} height={1080} />
        </div>
        <div className="w-1/3   h-screen z-10">
          <img src="/TermsSide.png" />
        </div>
        <div className="w-2/3   h-screen flex flex-col gap-10 items-center mt-6">
          <div className="w-[80%] font-medium text-sm">
            <p>
              The below Rental Terms and conditions apply ONLY for Bookings made
              through our website (https://THTCars.com). Please read these terms
              carefully. By accessing and/or using the Site, you fully and
              unconditionally accept and agree to be bound by these terms. For
              bookings that are made with THTCars through other websites, please
              refer to their advertised terms and conditions of the Rental
              Voucher.
            </p>
            <div className="text-lg font-semibold my-3">
              Driver’s Requirements:
            </div>
            <p>
              The minimum age to rent a vehicle is 21 years old. The renter or
              additional driver must have a valid driver’s license for one year.
              Renters and additional drivers under the age of 25 are subject to
              a surcharge fee and only can rent economy to full-size car cars.
              For certain specialty and larger-sized vehicles, the minimum age
              of 25 years of age applies.
            </p>

            <div className="text-lg font-semibold my-3">Driver’s License:</div>
            <p>
              The primary piece of identification required to rent a vehicle
              with THTCars is a valid driver’s license. For International
              customers or using a non-US driver license must provide a
              secondary form of ID as a valid Passport, Government-issued ID
              card or International License.
            </p>
          </div>
          <div className=" w-[80%] flex justify-end mt-20">
            <button className="bg-[#F47013] py-2 px-4 rounded-md text-white ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
