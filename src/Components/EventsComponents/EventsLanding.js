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
          <div className="flex flex-col items-end w-7/12 pb-20 pt-28 pl-10" style={{ fontFamily: "Faucet" }}>
            <p className="mb-1 text-4xl text-white">disrupt</p>
            <p className="flex-col pb-8 text-9xl text-white sm:text-4xl md:text-7xl" style={{ fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on" }}>
              EVENTS
            </p>
            <p className="mx-auto text-left text-white" style={{ fontFamily: "Usual-Regular" }}>
              We host bi-weekly events ranging from fireside chats, technology
              workshops, and guest panels to give Northeastern skills and insight
              into the FinTech industry to show how impactful FinTech can be.
              These events are open to everyone at Northeastern and no signup is
              require ahead of time.
            </p>
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
