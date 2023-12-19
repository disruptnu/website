import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import disruptLogo from "../../img/logo A.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import arrowDown from "../../img/arrowDown.svg";
import { NavLink } from "react-router-dom";

export default function EventsLanding({
  hamburgerMenuOpen,
  toggleHamburgerMenu,
}) {
  // Use this state to toggle the hamburger menu, false = closed, true = open
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  if (!hamburgerMenuOpen) {
    return (
      <div className="w-screen h-screen relative font-normal mb-20">
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
        <div
          className="flex flex-col items-end pt-28 pb-20 w-8/12"
          style={{ fontFamily: "Faucet" }}
        >
          <p className="text-white text-4xl mb-1">disrupt</p>
          <p
            className="text-white text-9xl pb-8"
            style={{ fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on" }}
          >
            EVENTS
          </p>
          <p
            className="text-white mx-auto ml-80 pl-48 text-justify"
            style={{ fontFamily: "Usual-Regular" }}
          >
            We host weekly events ranging from fireside chats, technology
            workshops, and guest panels to give Northeastern skills and insight
            into the FinTech industry to show how impactful FinTech can be.
            These events are open to everyone at Northeastern and no signup is
            require ahead of time.
          </p>
        </div>
        <div className="flex">
          <button className="text-white text-base px-12 py-2 font-normal bg-black border border-solid rounded-md hover:bg-[#b5f727] hover:text-black ml-auto mr-0">
            GOOGLE
          </button>
          <button className="text-white text-base px-12 py-2 font-normal bg-black border border-solid rounded-md hover:bg-[#b5f727] hover:text-black ml-10 mr-32">
            OUTLOOK
          </button>
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
