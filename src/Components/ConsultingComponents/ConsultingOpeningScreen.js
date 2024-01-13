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
      <div>
        <div className="w-screen relative flex flex-col items-center justify-center">
          <div className="w-screen flex items-start justify-between">
            <div className="flex items-center">
              <div>
                <NavLink to="/">
                  <img
                    src={disruptLogo}
                    alt="testLogo"
                    className="w-16 ml-4 mt-4"
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
          <div
            className="flex flex-col items-end pt-28 pb-20 w-5/12"
            style={{ fontFamily: "Faucet" }}
          >
            <p className="text-white text-4xl mb-1">disrupt</p>
            <p
              className="text-white text-8xl pb-8"
              style={{ fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on" }}
            >
              CONSULTING
            </p>
            <p
              className="text-white mx-auto text-justify"
              style={{ fontFamily: "Usual-Regular" }}
            >
              We empower FinTech organizations to tackle business challenges
              through pro-bono consulting. You have problems and projects that
              are important but don't have the bandwidth for. Founded out of
              Disrupt, the FinTech Initiative at Northeastern University,
              Consulting bridges that gap with impactful analysis and solutions.
            </p>
          </div>
        </div>

        <div className="sm:flex sm:flex-col sm:items-end mt-12 mr-16">
          <button>
            <img src={arrowDown} alt="" />
          </button>
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
