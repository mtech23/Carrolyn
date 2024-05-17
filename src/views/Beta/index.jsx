import React, { useEffect } from "react";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./Hero";
import AboutSection from "./About";
import Christmas from "./Christmas";
import MovingSection from "./Moving";
import AdvantureBook from "./AdvantureBook";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import LayoutTheme from "../Layout";

const BetaHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LayoutTheme>
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <Christmas />
      <MovingSection />
      <AdvantureBook />
      <ContactUs />
      {/* <Footer /> */}
    </LayoutTheme>
  );
};

export default BetaHome;
