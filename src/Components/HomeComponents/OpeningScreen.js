import React from "react";
import HamburgerMenu from "../HamburgerMenu.js";
import disruptLogo from "../../img/logo_a.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import backgroundVideo from "../../img/testStockVideoBackground.mp4";

export default function OpeningScreen({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  return (
    <div className="relative w-screen h-screen">
      {/* Render the video */}
      <video autoPlay loop muted className="absolute top-0 left-0 z-0 object-cover w-full h-full">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Render the hamburger button */}
      <div className={`absolute top-5 left-5 z-20 ${hamburgerMenuOpen ? 'hidden' : 'block'}`}>
        <button onClick={toggleHamburgerMenu} className="p-2 rounded-full bg-[#b5f727] hover:bg-green-700">
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Render the content */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 ${hamburgerMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
        <img src={disruptLogo} alt="Disrupt Logo" className="w-16 h-auto mx-auto mb-8" />
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl md:text-7xl">Disrupt</h1>
        <p className="mb-8 text-xl sm:text-2xl md:text-3xl">
          Northeastern's student-led fintech group; where curiosity meets innovation.
        </p>
        <button onClick={() => window.location = "https://airtable.com/appYvJkhyjQlVvoqV/shrXCWB0tMh79Ty5i"} className="bg-transparent border border-[#b5f727] text-[#b5f727] hover:bg-[#b5f727] hover:text-black rounded-full px-6 py-3 transition-colors">
          Join Us
        </button>
      </div>

      {/* Render the hamburger menu */}
      {hamburgerMenuOpen && (
        <HamburgerMenu
          hamburgerMenuOpen={hamburgerMenuOpen}
          toggleHamburgerMenu={toggleHamburgerMenu}
        />
      )}
    </div>
  );
}
