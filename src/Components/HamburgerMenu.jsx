import React from "react";
import { NavLink } from "react-router-dom";
import disruptLogoOrig from "../img/logo_a.svg";
import hamburgerIcon from "../img/hamburgerIcon.svg";

export default function HamburgerMenu({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  function handleClose() {
    toggleHamburgerMenu();
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`
        fixed top-0 left-0 z-50 flex flex-col h-screen
        transform transition-transform duration-300
        bg-blue-500
        w-64
        ${hamburgerMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between h-16 px-4 bg-black">
        <NavLink to="/" onClick={handleClose}>
          <img
            src={disruptLogoOrig}
            alt="Disrupt home"
            className="w-12 brightness-90"
          />
        </NavLink>

        <div className="flex items-center space-x-4">
          <a
            href="https://join.slack.com/t/disruptthefin-jlz8378/shared_invite/zt-2by2eubit-TX1I42vHghkBAW965jexlw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-sm font-bold bg-brand-lime px-4 py-2 rounded-md"
          >
            JOIN
          </a>
          <button
            onClick={handleClose}
            aria-label="Close navigation menu"
            className="p-0 bg-transparent border-none"
          >
            <img
              src={hamburgerIcon}
              alt=""
              className="w-8 h-8 filter grayscale brightness-200 hover:cursor-pointer"
            />
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto py-6 px-4">
        <NavItem to="/" label="Home" onClick={handleClose} />
        <NavItem to="/about" label="About" onClick={handleClose} />
        <NavItem to="/finnovate" label="Finnovate" onClick={handleClose} />
        <NavItem to="/consulting" label="Consulting" onClick={handleClose} />
        <NavItem to="/events" label="Events" onClick={handleClose} />
        <NavItem to="/newsroom" label="Newsroom" onClick={handleClose} />
      </div>

      <div className="flex flex-col items-end text-white text-base font-light pr-4 pb-4 space-y-2">
        <a href="mailto:nufintech@gmail.com">Email</a>
        <a href="https://www.instagram.com/neudisrupt" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/neudisrupt/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://disrupt-fintech.medium.com/" target="_blank" rel="noopener noreferrer">Newsletter</a>
      </div>
    </nav>
  );
}

function NavItem({ to, label, onClick }) {
  return (
    <div className="mb-4">
      <NavLink
        to={to}
        onClick={onClick}
        className="text-2xl font-bold text-white transition-all hover:ml-2"
      >
        {label}
      </NavLink>
    </div>
  );
}
