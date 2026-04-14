import React, { useState, useEffect } from "react";
import WhyDisrupt from "./AboutComponents/WhyDisrupt";
import FundamentalsDescription from "./AboutComponents/FundamentalsComponents/FundamentalsDescription";
import ThreePillars from "./AboutComponents/FundamentalsComponents/ThreePillars";
import TeamShowcase from "./AboutComponents/TeamShowcase";
import TeamCarousel from "./AboutComponents/TeamShowcaseComponents/TeamCarousel";
import Header from "../Header";
import Footer from "./HomeComponents/Footer";


export default function About() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  // Stop scrolling when Hamburger Menu is Open (hide overflow)
  useEffect(() => {
    if (hamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div>
      <Header
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
      <WhyDisrupt />
      <div className="divide-y divide-gray-800">
        <FundamentalsDescription />
        <ThreePillars />
      </div>
      <TeamCarousel />
      <TeamShowcase />
      <div>
        <p className="w-4/5 pt-20 mb-20 ml-10 text-2xl font-bold text-left text-white sm:text-4xl md:text-5xl lg:text-6xl">
          LET'S BUILD A FINTECH COMMUNITY{" "}
          <span className="text-green-500">TOGETHER</span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
