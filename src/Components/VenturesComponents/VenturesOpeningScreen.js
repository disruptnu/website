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
  // function handleClickHamburgerMenu() {
  //   toggleHamburgerMenu();
  // }

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
          <div className={`absolute top-5 right-5 z-30 ${hamburgerMenuOpen ? 'hidden' : 'block'}`}>
        <button onClick={toggleHamburgerMenu} className="p-2 rounded-full bg-[#b5f727] hover:bg-green-700">
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>
        </div>
        <div className="flex flex-col items-center w-full px-4 pt-10 pb-10 sm:items-end sm:pt-28 sm:pb-20 sm:w-8/12 md:w-5/12">
          <p className="mb-2 text-2xl text-white sm:text-4xl" style={{ fontFamily: "Faucet" }}>disrupt</p>
          <p className="pb-5 text-4xl text-white sm:text-8xl sm:pb-8"
             style={{ fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on", fontFamily: "Faucet" }}>
            FINNOVATE
          </p>
          <p
            className="mx-auto text-justify text-white leading-relaxed max-w-3xl"
            style={{ fontFamily: "Usual-Regular" }}
          >
            Disrupt's Finnovate is an 8-week-long program where students will be
            challenged to create a new, innovative idea in the FinTech space
            that aims to disrupt the traditional financial service industry.

            Students will be formed into groups and attend a series of weekly
            workshops that will not only enhance their technical skills
            but also develop their entrepreneurial business skills.
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
