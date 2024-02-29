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

  if (!hamburgerMenuOpen) {
    return (
      <div className="relative flex flex-col items-center justify-center w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between w-full px-4 py-5 sm:flex-row">
          <div className="flex items-center">
            <div>
              <NavLink to="/">
                <img
                  src={disruptLogo}
                  alt="testLogo"
                  className="w-16 mt-4 ml-4"
                />
              </NavLink>
            </div>
          </div>
          <div className="flex items-center py-4 border border-solid rounded-full border-[#b5f727] mr-5 mt-5 hover:scale-110">
            <img
              src={hamburgerIcon}
              alt="hamburgerMenuIcon"
              onClick={handleClickHamburgerMenu}
              className="h-5 w-14 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full px-4 pt-10 pb-10 sm:items-end sm:pt-28 sm:pb-20 sm:w-8/12 md:w-5/12">
          <p className="mb-2 text-2xl text-white sm:text-4xl">disrupt</p>
          <p className="pb-5 text-6xl text-white sm:text-9xl sm:pb-8">FINNOVATE</p>
          <p
            className="mx-auto text-justify text-white"
            style={{ fontFamily: "Usual-Regular" }}
          >
            Disrupt's Finnovate is an 8-week long program where students will be
            challenged to create a new innovative idea in the FinTech space that
            aims to disrupt the traditional financial service industry. Students
            will be formed into groups and attend a series of weekly workshops
            that will not only enhance their technical skills but their
            entrepreneurial business skills.
          </p>
        </div>

        <div className="items-center mb-40">
          <p
            className="justify-center pt-12 pb-4 text-sm text-white"
            style={{ fontFamily: "Usual-Light" }}
          >
            READ MORE
          </p>
          <img src={arrowDown} alt="" className="ml-8" />
        </div>
        <div className="pb-32">
          {/* <p
            className="text-4xl text-white"
            style={{ fontFamily: "Usual-Regular" }}
          >
            [More info about Finnovate/Applying]
          </p> */}
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
