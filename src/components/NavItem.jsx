import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";

const NavItem = ({ navOpen }) => {
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
      link: "#about-us",
      name: "About Us",
      className: "nav-links",
    },
    {
      link: "#reviews",
      name: "Reviews",
      className: "nav-links",
    },
    {
      link: "#our-fleet",
      name: "Our Fleet",
      className: "nav-links",
    },
    {
      link: "#my-reservations",
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
      link: "#login",
      name: "Login",
      className: "nav-links md:hidden",
    },
  ];
  return (
    <nav className={"navbar" + (navOpen ? "active" : "")}>
      {navItems.map(({ link, name, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {name}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
NavItem.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default NavItem;
