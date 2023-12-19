import React from "react";
import HamburgerMenu from "../HamburgerMenu.js";
import disruptLogo from "../../img/logo A.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import { NavLink } from "react-router-dom";

export default function NewsroomLanding({
  hamburgerMenuOpen,
  toggleHamburgerMenu,
}) {
  // Use this state to toggle the hamburger menu, false = closed, true = open
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  if (!hamburgerMenuOpen) {
    return (
      <div className="w-screen h-1/3 relative ">
        <div className="w-screen h-20 flex items-start justify-between">
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
        <div className="w-screen flex flex-col items-start pl-32 mt-10">
          <div
            className="text-white py-8 text-7xl font-bold"
            style={{
              fontFamily: "Faucet",
              fontFeatureSettings: "'dlig' on, 'ss02' on",
            }}
          >
            <p>Blog</p>
          </div>
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
