import React from "react";
import { NavLink } from "react-router-dom";
import disruptLogo from "../img/logo A.svg";
import hamburgerIcon from "../img/hamburgerIcon.svg";
import navigationArrowIcon from "../img/navigationArrowIcon.svg";
import "./HamburgerMenuStyles.css";

export default function HamburgerMenuOpen({
  hamburgerMenuOpen,
  toggleHamburgerMenu,
}) {
  function handleClickHamburgerMenu() {
    toggleHamburgerMenu();
  }

  function handleClickJoin() {
    window.location =
      "https://airtable.com/appYvJkhyjQlVvoqV/shrXCWB0tMh79Ty5i";
  }

  function handleClickInstagram() {
    window.location = "https://www.instagram.com/neudisrupt";
  }
  function handleClickLinkedIn() {
    window.location = "https://www.linkedin.com/company/neudisrupt/";
  }
  function handleClickEmail() {
    window.location = "mailto:%20nufintech@gmail.com";
  }

  return (
    <div className="w-screen h-screen top-0 right-0 bg-navigationMenu z-20 flex flex-col">
      <div className="w-screen h-20 flex items-start justify-between">
        <div className="flex items-center">
          <div>
            <NavLink to="/">
              <img
                src={disruptLogo}
                alt="testLogo"
                className="w-20 h-20 ml-3 brightness-90"
              />
            </NavLink>
          </div>
        </div>
        <div className="flex items-center py-8">
          <button
            className="text-black text-xl font-bold bg-[#b5f727] px-12 py-3 rounded-md hover:bg-[#b5f727] hover:text-black"
            onClick={handleClickJoin}
          >
            JOIN
          </button>
          <img
            src={hamburgerIcon}
            alt="hamburgerMenuIcon"
            onClick={handleClickHamburgerMenu}
            className="w-24 h-6 hover:cursor-pointer filter grayscale brightness-200"
          />
        </div>
      </div>
      <div className="flex-grow">
        <div className="selection:text-blue-500 text-8xl pl-28 flex flex-col">
          <div className="text-white font-bold mt-16 relative group">
            <NavLink to="/About" onClick={handleClickHamburgerMenu}>
              <span className="text-move">About</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="hidden absolute top-1/2 transform -translate-y-1/2 group-hover:block"
            />
          </div>
          <div className="text-white font-bold relative group">
            <NavLink to="/Ventures" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Ventures</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="hidden absolute top-1/2 transform -translate-y-1/2 group-hover:block"
            />
          </div>
          <div className="text-white font-bold relative group">
            <NavLink to="/Consulting" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Consulting</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="hidden absolute top-1/2 transform -translate-y-1/2 group-hover:block"
            />
          </div>
          <div className="text-white font-bold relative group">
            <NavLink to="/Events" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Events</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="hidden absolute top-1/2 transform -translate-y-1/2 group-hover:block"
            />
          </div>
          <div className="text-white font-bold relative group">
            <NavLink to="/Newsroom" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Newsroom</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="hidden absolute top-1/2 transform -translate-y-1/2 group-hover:block"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="absolute right-16 bottom-16 text-white text-4xl font-light group">
        <div>
          <button onClick={handleClickEmail}>
            <h1>Email</h1>
          </button>
        </div>
        <div>
          <button onClick={handleClickInstagram}>
            <h1>Instagram</h1>
          </button>
        </div>
        <div>
          <button onClick={handleClickLinkedIn}>
            <h1>LinkedIn</h1>
          </button>
        </div>
        <div>
          <NavLink to="#">Newsletter</NavLink>
        </div>
      </div>
    </div>
  );
}
