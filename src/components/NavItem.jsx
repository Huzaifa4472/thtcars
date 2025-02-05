import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
const NavItem = ({ navOpen }) => {
  const location = useLocation();
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };
  const navItems = [
    {
      link: "#home",
      name: "Home",
      className: "nav-links active",
      ref: lastActiveLink,
    },
    {
      link: "#about",
      name: "About Us",
      className: "nav-links",
    },
    {
      link: "#customer-review",
      name: "Reviews",
      className: "nav-links",
    },
    {
      link: "#our-fleet",
      name: "Our Fleet",
      className: "nav-links",
    },
    {
      link: "/reservation",
      name: "My Reservations",
      className: "nav-links",
    },
    {
      link: "#faq",
      name: " FAQ's",
      className: "nav-links",
    },
    {
      link: "#contact",
      name: "Contact",
      className: "nav-links",
    },
    {
      link: "/login",
      name: "Login",
      className: "nav-links md:hidden",
    },
  ];
  return (
    <>
      <section className=" md:!flex hidden z-50 absolute top-0 w-full">
        <div
          className={`w-1/2 ml-auto py-3 px-5  ${
            location.pathname === "/reservation" ||
            location.pathname === "/login"
              ? "text-black"
              : "text-white"
          }`}
        >
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
      </section>
      <header className="absolute top-16 w-full flex items-center z-40 ">
        <div className=" w-[100%] flex justify-between items-center ">
          <a href="/" className="logo pt-4">
            <img src="/logo.png" alt="logo" width={150} height={150} />
          </a>
          <div
            className={`flex items-center  md:justify-self-center bg-curved-bg  w-[100%] ${
              location.pathname === "/reservation" ||
              location.pathname === "/login"
                ? "bg-[#000222] text-white"
                : "bg-white"
            }`}
            style={{
              "--tw-curvature": "40px",
              maskImage:
                "radial-gradient(var(--tw-curvature) 60% at left, transparent calc(100% - 1px), black)",
              WebkitMaskImage:
                "radial-gradient(var(--tw-curvature) 60% at left, transparent calc(100% - 1px), black)",
            }}
          >
            <nav className={"navbar" + (navOpen ? "active" : "")}>
              {navItems.map(({ link, name, className, ref }, key) => (
                <a
                  href={link}
                  key={key}
                  ref={ref}
                  className={`${className} ${
                    location.pathname === "/reservation" ||
                    location.pathname === "/login"
                      ? "text-white"
                      : "text-black"
                  }`}
                  onClick={activeCurrentLink}
                >
                  {name}
                </a>
              ))}
              <div className="active-box" ref={activeBox}></div>
            </nav>
            <a
              href="/login"
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
    </>
  );
};
NavItem.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default NavItem;
