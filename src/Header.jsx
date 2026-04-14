import React, { useEffect, useState, useCallback } from "react";
import HamburgerMenu from "./Components/HamburgerMenu";
import hamburgerIcon from "./img/hamburgerIcon.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/consulting", label: "Consulting" },
  { to: "/quant", label: "Quant" },
  { to: "/research", label: "Research" },
  { to: "/finnovate", label: "Finnovate" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
];

function isColorDark(r, g, b) {
  return (r * 0.299 + g * 0.587 + b * 0.114) < 128;
}

function getEffectiveBgColor(el) {
  // Walk up the DOM to find the first non-transparent background
  while (el) {
    const bg = window.getComputedStyle(el).backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (match) {
      const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
      if (alpha > 0.1) return { r: +match[1], g: +match[2], b: +match[3] };
    }
    el = el.parentElement;
  }
  return null;
}

export default function Header({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  const location = useLocation();
  const [overDark, setOverDark] = useState(true);

  const detectBackground = useCallback(() => {
    // Sample a point just below the header center
    const x = window.innerWidth / 2;
    const y = 40;

    // Temporarily hide header so elementFromPoint hits the content behind it
    const header = document.querySelector("header");
    if (!header) return;

    header.style.pointerEvents = "none";
    header.style.visibility = "hidden";
    const el = document.elementFromPoint(x, y);
    header.style.pointerEvents = "";
    header.style.visibility = "";

    if (!el) return;

    const color = getEffectiveBgColor(el);
    if (color) {
      setOverDark(isColorDark(color.r, color.g, color.b));
    }
  }, []);

  useEffect(() => {
    detectBackground();

    window.addEventListener("scroll", detectBackground, { passive: true });
    return () => window.removeEventListener("scroll", detectBackground);
  }, [detectBackground, location.pathname]);

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
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Desktop header */}
      <div className="hidden laptop:flex max-w-[1800px] w-[99%] mx-auto items-center justify-between h-16 px-8">
        <Link to="/" className="flex-shrink-0">
          <img
            src={overDark ? "/logos/Brandmark+Wordmark_Light_Large.png" : "/logos/Brandmark+Wordmark_Dark_Large.png"}
            alt="Disrupt Logo"
            className="h-9 w-auto"
          />
        </Link>

        <nav
          className={`flex items-center gap-0.5 rounded-full px-1.5 py-1 transition-colors duration-300 ${
            overDark ? "bg-[#2a2a2a]" : "bg-[#ebebeb]"
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm transition-colors ${
                  isActive
                    ? overDark
                      ? "bg-white/20 text-white font-medium"
                      : "bg-surface-primary text-white font-medium"
                    : overDark
                      ? "text-white/60 hover:text-white font-normal"
                      : "text-text-secondary hover:text-text-primary font-normal"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="#"
          className={`px-5 py-2 font-medium rounded-full text-sm transition ${
            overDark
              ? "bg-brand-lime text-surface-primary hover:brightness-110"
              : "bg-surface-primary text-white hover:bg-surface-elevated"
          }`}
        >
          Apply
        </a>
      </div>

      {/* Mobile floating pill */}
      <div className="laptop:hidden flex justify-center pt-3 px-4">
        <div
          className={`flex items-center justify-between w-full max-w-md rounded-full px-4 py-2 transition-colors duration-300 ${
            overDark ? "bg-[#2a2a2a]" : "bg-[#ebebeb]"
          }`}
        >
          <Link to="/" className="flex-shrink-0">
            <img
              src={overDark ? "/logos/Brandmark+Wordmark_Light_Large.png" : "/logos/Brandmark+Wordmark_Dark_Large.png"}
              alt="Disrupt Logo"
              className="h-8 w-auto"
            />
          </Link>

          <button
            onClick={toggleHamburgerMenu}
            aria-expanded={hamburgerMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-1"
          >
            <svg className={`w-5 h-5 ${overDark ? "text-white" : "text-text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <HamburgerMenu
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
    </header>
  );
}
