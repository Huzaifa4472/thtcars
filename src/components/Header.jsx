import Home from "./Home";
import { GrMenu } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import NavItem from "./NavItem";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <section className=" md:!flex hidden z-50 absolute top-0 w-full">
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
      <header className="absolute top-16 w-full flex items-center z-40 ">
        <div className=" w-[100%] flex justify-between items-center ">
          <a href="/" className="logo pt-4">
            <img src="/logo.png" alt="logo" width={150} height={150} />
          </a>
          <div
            className="flex items-center  md:justify-self-center bg-curved-bg bg-white w-[100%] border  border-red-600"
            style={{
              "--tw-curvature": "40px",
              maskImage:
                "radial-gradient(var(--tw-curvature) 60% at left, transparent calc(100% - 1px), black)",
              WebkitMaskImage:
                "radial-gradient(var(--tw-curvature) 60% at left, transparent calc(100% - 1px), black)",
            }}
          >
            <button
              className=" menu-btn md:hidden "
              onClick={() => {
                setNavOpen((prev) => !prev);
              }}
            >
              {navOpen ? <MdOutlineClose /> : <GrMenu />}
            </button>
            <NavItem navOpen={navOpen} />
            <a
              href="#login"
              className="btn btn-secondary max-md:hidden md:justify-self-end flex items-center gap-2 pr-4"
            >
              Login
              <div className="bg-[#F47013] p-3 rounded-full">
                <img src="/login.png" width={30} height={20} />
              </div>
            </a>
          </div>
        </div>
      </header>
      <Home />
    </>
  );
};

export default Header;
