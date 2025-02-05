import Home from "./Home";
import NavItem from "./NavItem";
import { useState } from "react";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Footer from "./Footer";
import TermsCondition from "./TermsCondition";
import CustomerReview from "./CustomerReview";
import Contact from "./Contact";
import OurFleet from "./OurFleet";

const Header = () => {
  return (
    <>
      <NavItem />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="our-fleet">
        <OurFleet />
      </section>
      <section id="customer-review">
        <CustomerReview />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="terms">
        <TermsCondition />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Header;
