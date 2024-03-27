import React from "react";
import { NavLink } from "react-router-dom";
import disruptLogoBlack from "../img/logo_black.svg";
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
    <div className="top-0 right-0 z-20 flex flex-col w-screen h-screen bg-navigationMenu">
      <div className="flex items-start justify-between w-screen h-20">
        <div className="flex items-center">
          <div>
            <NavLink to="/">
              <img
                src={disruptLogoBlack} // get one that replaces the blue for bl
                alt="testLogo"
                className="w-16 mt-4 ml-4 brightness-90"
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
        <div className="flex flex-col pl-4 text-4xl selection:text-blue-500 sm:text-5xl sm:pl-28">
          <div className="relative mt-8 font-bold text-white group">
            <NavLink to="/" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Home</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="absolute hidden transform -translate-y-1/2 top-1/2 group-hover:block"
            />
          </div>
          <div className="relative font-bold text-white group">
            <NavLink to="/about" onClick={handleClickHamburgerMenu}>
              <span className="text-move">About</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="absolute hidden transform -translate-y-1/2 top-1/2 group-hover:block"
            />
          </div>
          <div className="relative font-bold text-white group">
            <NavLink to="/finnovate" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Finnovate</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="absolute hidden transform -translate-y-1/2 top-1/2 group-hover:block"
            />
          </div>
          <div className="relative font-bold text-white group">
            <NavLink to="/consulting" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Consulting</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="absolute hidden transform -translate-y-1/2 top-1/2 group-hover:block"
            />
          </div>
          <div className="relative font-bold text-white group">
            <NavLink to="/events" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Events</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="absolute hidden transform -translate-y-1/2 top-1/2 group-hover:block"
            />
          </div>
          <div className="relative font-bold text-white group">
            <NavLink to="/newsroom" onClick={handleClickHamburgerMenu}>
              <span className="text-move">Newsroom</span>
            </NavLink>
            <img
              src={navigationArrowIcon}
              alt="navigationArrowIcon"
              className="absolute hidden transform -translate-y-1/2 top-1/2 group-hover:block"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="absolute text-4xl font-light text-white right-16 bottom-16 group">
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
