import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-[100%]  flex flex-col justify-center items-center ">
      <div className="bg-[#000222] text-white text-3xl font-medium text-center w-[100%]  flex justify-between  items-center px-10">
        <div className="w-1/5 mt-10  flex justify-start items-center ">
          <img src="/logo.svg" width={100} />
        </div>
        <div className=" w-1/2   py-3 px-5 text-white mt-5">
          <div className="flex justify-between mb-5 font-light text-sm">
            <div className="flex items-center gap-2">
              <LuMail width={18} height={18} />
              <p>support@THTCars.com</p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <FiPhoneCall width={18} height={18} />
              <p className=" font-medium ">+1 (833) 330-0996</p>
            </div>
          </div>
          <div>
            <p className="font-light text-xs">
              Text CAR to 18333300996 OPT IN NOTIFICATIONS/CUSTOMER CARE
              MESSAGING from THTCARS company.
            </p>
          </div>
        </div>
        <div className="w-1/8    text-white flex gap-3 items-center justify-center">
          <FaFacebookF />
          <BsInstagram />
          <BsWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
