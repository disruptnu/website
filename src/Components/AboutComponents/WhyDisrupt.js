import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import disruptLogo from "../../img/logo_a.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";

export default function WhyDisrupt({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  // Toggle hamburger menu
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  if (!hamburgerMenuOpen) {
    return (
      <div className="relative w-screen min-h-screen">
        <div className="flex items-center justify-between w-full p-4 md:p-8">
          <NavLink to="/">
            <img src={disruptLogo} alt="Disrupt Logo" className="w-16 h-auto" />
          </NavLink>
          <button onClick={handleClickHamburgerMenu} className="py-2 px-4 border border-solid rounded-full border-[#b5f727] hover:scale-110 transition-transform duration-200" aria-label="Open Menu">
            <img src={hamburgerIcon} alt="Menu" className="h-auto w-14" />
          </button>
        </div>
        <div className="flex flex-col items-start pl-8 mt-24 md:pl-32 md:mt-44">
          <h1 className="py-4 text-5xl font-bold text-white md:py-8 md:text-7xl" style={{ fontFamily: "Faucet", fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on" }}>
            WHY DISRUPT?
          </h1>
          <p className="w-full pb-8 text-lg text-white md:text-2xl md:w-1/2" style={{ fontFamily: "Usual-Regular" }}>
            At Northeastern University, we have recognized the disruptive power of technology in finance and have started Disrupt to collaborate to change the finance industry.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <HamburgerMenu hamburgerMenuOpen={hamburgerMenuOpen} toggleHamburgerMenu={toggleHamburgerMenu} />
    );
  }
}
