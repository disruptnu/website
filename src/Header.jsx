import React from "react";
import HamburgerMenu from "./Components/HamburgerMenu";
import disruptLogo from "./img/logo_a.svg";
import hamburgerIcon from "./img/hamburgerIcon.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        toggleHamburgerMenu(false)
      };  
    }
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey)
    }, [toggleHamburgerMenu])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center w-full h-20 pt-4 px-5 bg-transparent">
        {!isHomePage ? (
          <Link to="/">
            <img src={disruptLogo} alt="Disrupt Logo" className="w-16 h-auto" />
          </Link>
        ) : (
          <img
            src={disruptLogo}
            alt="Disrupt Logo"
            className="w-16 h-auto"
            onClick={() => {
              console.log("No Link Clicked");
            }}
          />
        )}
        <div className="absolute top-5 left-5 z-30">
          <button
            onClick={toggleHamburgerMenu}
            className="p-2 rounded-full bg-[#b5f727] hover:bg-green-700"
          >
            <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
          </button>
        </div>
        {hamburgerMenuOpen && (
          <HamburgerMenu toggleHamburgerMenu={toggleHamburgerMenu} />
        )}
        {/* Render the hamburger menu */}
        {hamburgerMenuOpen && (
          <HamburgerMenu
            hamburgerMenuOpen={hamburgerMenuOpen}
            toggleHamburgerMenu={toggleHamburgerMenu}
          />
        )}
      </div>
    </>
  );
}
