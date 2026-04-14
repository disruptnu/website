import React, { useEffect } from "react";
import HamburgerMenu from "./Components/HamburgerMenu";
import disruptLogo from "./img/logo_a.svg";
import hamburgerIcon from "./img/hamburgerIcon.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && hamburgerMenuOpen) {
        toggleHamburgerMenu();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [hamburgerMenuOpen, toggleHamburgerMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center w-full h-20 pt-4 px-5 bg-transparent">
      {!isHomePage ? (
        <Link to="/">
          <img src={disruptLogo} alt="Disrupt Logo" className="w-16 h-auto" />
        </Link>
      ) : (
        <img
          src={disruptLogo}
          alt="Disrupt Logo"
          className="w-16 h-auto"
        />
      )}
      <div className="absolute top-5 left-5 z-30">
        <button
          onClick={toggleHamburgerMenu}
          aria-expanded={hamburgerMenuOpen}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-full bg-brand-lime hover:bg-green-700"
        >
          <img src={hamburgerIcon} alt="" className="w-8 h-8" />
        </button>
      </div>
      <HamburgerMenu
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
    </header>
  );
}
