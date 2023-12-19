import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import disruptLogo from "../../img/logo A.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import arrowDown from "../../img/arrowDown.svg";
import { NavLink } from "react-router-dom";

export default function PastVenturesOpeningScreen({
  hamburgerMenuOpen,
  toggleHamburgerMenu,
}) {
  // Use this state to toggle the hamburger menu, false = closed, true = open
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }
  // Enable to test side bar style menu
  /*const hamburgerMenuStyle = {
        transform: hamburgerMenuOpen ? 'translateX(0)' : 'translateX(+100%)', // Slide in from the left when open
        transition: 'transform 1.0s ease-in-out', // Add a smooth transition effect
        WebkitTransition: '-webkit-transform 1.0s ease-in-out',
        MozTransition: '-moz-transform 1.0s ease-in-out',
    };*/

  if (!hamburgerMenuOpen) {
    return (
      <div className="w-screen relative flex flex-col items-center justify-center">
        <div className="w-screen flex items-start justify-between">
          <div className="flex items-center">
            <div>
              <NavLink to="/">
                <img
                  src={disruptLogo}
                  alt="testLogo"
                  className="w-20 h-20 ml-3"
                />
              </NavLink>
            </div>
          </div>
          <div className="flex items-center py-4 border border-solid rounded-full border-[#b5f727] mr-5 mt-5 hover:scale-110">
            <img
              src={hamburgerIcon}
              alt="hamburgerMenuIcon"
              onClick={handleClickHamburgerMenu}
              className="w-14 h-5 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="w-3/4 flex flex-col items-center pl-8 pt-32">
          <p
            className="text-white text-4xl mb-1 -mr-96"
            style={{ fontFamily: "Usual-Light" }}
          >
            disrupt
          </p>
          <p
            className="text-white text-9xl pb-8 mr-16"
            style={{
              fontFamily: "Faucet",
              fontFeatureSettings: "'dlig' on, 'ss01' on",
            }}
          >
            VENTURES
          </p>
          <p
            className="w-3/5 text-white text-md mb-1 justify-center leading-7"
            style={{ fontFamily: "Usual-Regular" }}
          >
            Finnovate is an 8-week long program where students will be
            challenged to create a new innovative idea in the FinTech space that
            aims to disrupt the traditional financial service industry. Students
            will be formed into groups and attend a series of weekly workshops
            that will not only enhance their technical skills but their
            entrepreneurial business skills.
          </p>
        </div>
        <div className="items-center mb-40">
          <p
            className="text-white text-sm pt-12 pb-4 justify-center"
            style={{ fontFamily: "Usual-Light" }}
          >
            READ MORE
          </p>
          <img src={arrowDown} alt="" className="ml-8" />
        </div>
        <div className="pb-32">
          <p
            className="text-white text-4xl"
            style={{ fontFamily: "Usual-Regular" }}
          >
            [More info about Ventures/Applying]
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <HamburgerMenu
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
    );
  }
}
