// import React, { useRef, useState } from "react";
import Home from "./Home";
import { GrMenu } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import NavItem from "./NavItem";
import { useState } from "react";
// import NavItem from "./NavItem";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <section className=" md:!flex hidden">
        <div className=" w-1/2 ml-auto py-3 px-5 text-white">
          <div className="flex justify-between mb-5 font-light text-sm">
            <div className="flex items-center gap-2">
              {/* <Mail width={18} height={18} /> */}

              <p>support@THTCars.com</p>
            </div>{" "}
            <div className="flex items-center gap-2">
              {/* <Phone width={18} height={18} /> */}

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
      </section>
      <header className="fixed top-0 left-0 w-full h-40 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900">
        <div className="max-w-screen-2xl w-full mx-auto px-4  flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
          <a href="/" className="logo">
            <img src="/logo.png" alt="logo" width={120} height={120} />
          </a>
          <div className="relative md:justify-self-center">
            <button
              className=" menu-btn md:hidden"
              onClick={() => {
                setNavOpen((prev) => !prev);
              }}
            >
              {navOpen ? <MdOutlineClose /> : <GrMenu />}
            </button>
            <NavItem navOpen={navOpen} />
          </div>
          <a
            href="#login"
            className="btn btn-secondary max-md:hidden md:justify-self-end"
          >
            Login
            <img src="/login.png" width={20} height={20} />
          </a>
        </div>

        <Home />
      </header>
    </>
  );
};

export default Header;

{
  /* <div>
  
  <div className=" md:hidden flex flex-col justify-center gap-1">
          <div className="font-bold text-xl italic border-b-2 border-[#F47013]">
            T<span className="text-[#F47013]">H</span>T Cars
          </div>
          <div className="text-xs ">Drive With Safety</div>
        </div>
  
  <div
    className="h-24 bg-white w-full bg-curved-bg hidden md:!flex justify-end pr-5  "
    style={{
      "--tw-curvature": "40px",
      maskImage:
        "radial-gradient(var(--tw-curvature) 60% at left, transparent calc(100% - 1px), black)",
      WebkitMaskImage:
        "radial-gradient(var(--tw-curvature) 60% at left, transparent calc(100% - 1px), black)",
    }}
  >
  </div>
</div>; */
}
