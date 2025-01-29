import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[100%]  flex flex-col justify-center items-center ">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-[100%] py-4 ">
        About Us
      </div>
      <div className="flex w-[100%]">
        <div className="w-1/2 h-screen flex flex-col gap-10 items-center justify-around ">
          <div className="w-[80%]">
            <div className="w-[100%] flex justify-center mb-5">
              <img src="/Group.png" />
            </div>
            <div className="text-lg font-semibold">Family-Owned Excellence</div>
            <p>
              Since 2016, THTCars has proudly served Houston, offering premium
              car rental services near George W. Bush Intercontinental Airport
              (IAH). Our family-owned business provides a diverse Our
              family-owned business provides a diverse
            </p>
          </div>
          <div className="w-[80%]">
            <div className="w-[100%]  flex justify-center mb-5">
              <img src="/Commitment.png" />
            </div>{" "}
            <div className="text-lg font-semibold">
              Sustainability Commitment{" "}
            </div>
            <p>
              Dedicated to carbon-neutral travel, we actively support greenhouse
              gas reduction through impactful initiatives, making every journey
              a step towards a greener future.
            </p>
          </div>
        </div>
        <div className=" w-1/3 h-screen relative">
          <img className="w-full h-auto" src="/track.png" />
          <img
            src="/AboutUpper.png"
            className="absolute top-0 left-0 w-full h-auto"
          />
        </div>
        <div className="w-1/2 h-screen flex flex-col gap-10 items-center justify-around ">
          <div className="w-[80%]">
            <div className="w-[100%] flex justify-center mb-5">
              <img src="/Convinent.png" />
            </div>
            <div className="text-lg font-semibold">
              Convenient & Hassle-Free Rentals
            </div>
            <p>
              Experience seamless service with airport pick-up, drop-off, and
              delivery options. Short-term or long-term, THTCars ensures
              flexibility and customer satisfaction with remote pick-up and
              drop-off alternatives.
            </p>
          </div>
          <div className="w-[80%]">
            <div className="w-[100%]  flex justify-center mb-5">
              <img src="/Service.png" />
            </div>{" "}
            <div className="text-lg font-semibold">
              Unmatched Service Anytime
            </div>
            <p>
              Available 24/7, THTCars guarantees exceptional Available 24/7,
              THTCars guarantees exceptional Available 24/7, THTCars guarantees
              exceptional journey today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
