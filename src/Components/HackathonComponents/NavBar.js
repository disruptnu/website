import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo_a.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-customDarkBlue">
      <div className="flex items-center">
        {/* Left Navigation Links */}
        <NavLink to="/about" className="mx-4 hover:text-green-500">
          About
        </NavLink>
        <NavLink to="/tracks" className="mx-4 hover:text-green-500">
          Tracks
        </NavLink>
      </div>

      {/* Centered Logo Image */}
      <div className="flex justify-center flex-grow">
        <NavLink to="/">
          <img src={logo} alt="Home" className="h-12" />
        </NavLink>
      </div>

      <div className="flex items-center">
        {/* Right Navigation Links */}
        <NavLink to="/speakers" className="mx-4 hover:text-green-500">
          Speakers
        </NavLink>
        <NavLink to="/apply" className="mx-4 hover:text-green-500">
          Apply
        </NavLink>
      </div>
    </nav>
  );
}
