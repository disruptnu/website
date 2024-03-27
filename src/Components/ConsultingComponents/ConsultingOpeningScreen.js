import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import disruptLogo from "../../img/logo_a.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import arrowDown from "../../img/arrowDown.svg";
import { NavLink } from "react-router-dom";

export default function PastVenturesOpeningScreen({
  hamburgerMenuOpen,
  toggleHamburgerMenu,
}) {
  return hamburgerMenuOpen ? (
    <HamburgerMenu
      hamburgerMenuOpen={hamburgerMenuOpen}
      toggleHamburgerMenu={toggleHamburgerMenu}
    />
  ) : (
    <div>
      <div className="relative flex flex-col items-center justify-center w-screen">
        {/* Logo and Hamburger Menu */}
        <div className="flex items-start justify-between w-screen">
          <NavLink to="/">
            <img src={disruptLogo} alt="Disrupt Logo" className="w-16 mt-4 ml-4" />
          </NavLink>
          <div
            className="flex items-center py-4 border border-solid rounded-full border-[#b5f727] mr-5 mt-5 hover:scale-110 cursor-pointer"
            onClick={toggleHamburgerMenu}
          >
            <img src={hamburgerIcon} alt="Hamburger Menu Icon" className="h-5 w-14" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-end w-5/12 pb-20 pt-28" style={{ fontFamily: "Faucet" }}>
          <p className="mb-1 text-4xl text-white">disrupt</p>
          <p className="flex-col pb-8 text-4xl text-white sm:text-2xl md:text-5xl" style={{ fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on" }}>
            CONSULTING
          </p>
          <p className="mx-auto text-justify text-white" style={{ fontFamily: "Usual-Regular" }}>
            We empower FinTech organizations to tackle business challenges through pro-bono consulting...
          </p>
        </div>
      </div>

      {/* Arrow Down Button */}
      <div className="mt-12 mr-16 sm:flex sm:flex-col sm:items-end">
        <button>
          <img src={arrowDown} alt="Scroll Down" />
        </button>
      </div>
    </div>
  );
}
