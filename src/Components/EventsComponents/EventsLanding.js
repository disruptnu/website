import React, { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";
import disruptLogo from "../../img/logo_a.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import arrowDown from "../../img/arrowDown.svg";
import { NavLink } from "react-router-dom";

export default function EventsLanding({
  hamburgerMenuOpen,
  toggleHamburgerMenu,
}) {
  const [showMenuBackground] = useState(false);

  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  return (
    <div className={`relative h-screen flex-col items-cetner ${showMenuBackground ? 'bg-green-500' : ''}`}>
      <div className={`absolute top-0 left-0 z-10 flex items-center justify-between w-full h-20 px-5 ${hamburgerMenuOpen ? 'hidden' : ''}`}>
        {/* Conditionally apply 'hidden' class based on hamburgerMenuOpen state */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={disruptLogo}
              alt="testLogo"
              className="w-16 mt-4 ml-4"
            />
          </NavLink>
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
      {!hamburgerMenuOpen && (
        <div className="relative z-0 flex flex-col items-center justify-center h-full">
          <div className="w-8/12 text-center">
            <p className="mb-1 text-4xl text-white texts-center">disrupt</p>
            <p
              className="flex pb-8 mx-auto text-center text-white text-8xl"
              style={{ fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on" }}
            >
              EVENTS
            </p>
            <p className="pl-10 pr-10 mx-auto text-justify text-white">
              We host weekly events ranging from fireside chats, technology
              workshops, and guest panels to give Northeastern skills and insight
              into the FinTech industry to show how impactful FinTech can be.
              These events are open to everyone at Northeastern and no signup is
              require ahead of time.
            </p>
          </div>
          <div className="flex mt-8">
            <button className="text-white text-base px-12 py-2 font-normal bg-black border border-solid rounded-md hover:bg-[#b5f727] hover:text-black mr-4">
              GOOGLE
            </button>
            <button className="text-white text-base px-12 py-2 font-normal bg-black border border-solid rounded-md hover:bg-[#b5f727] hover:text-black">
              OUTLOOK
            </button>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 right-0 z-10 mb-8 mr-8">
        <button>
          <img src={arrowDown} alt="" />
        </button>
      </div>
      {hamburgerMenuOpen && (
        <HamburgerMenu
          hamburgerMenuOpen={hamburgerMenuOpen}
          toggleHamburgerMenu={toggleHamburgerMenu}
        />
      )}
    </div>
  );
}
