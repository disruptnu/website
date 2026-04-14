import React from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/consulting", label: "Consulting" },
  { to: "/quant", label: "Quant" },
  { to: "/research", label: "Research" },
  { to: "/finnovate", label: "Finnovate" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
];

export default function HamburgerMenu({ hamburgerMenuOpen, toggleHamburgerMenu }) {
  function handleClose() {
    toggleHamburgerMenu();
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-[70] ${hamburgerMenuOpen ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      {hamburgerMenuOpen && (
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={handleClose}
        />
      )}

      {/* Menu panel */}
      <nav
        aria-label="Mobile navigation"
        className={`
          absolute top-0 right-0 z-10 flex flex-col h-full
          transform transition-transform duration-300 ease-out
          bg-surface-primary w-full max-w-sm pointer-events-auto
          ${hamburgerMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6">
          <img
            src="/logos/Brandmark+Wordmark_Light_Large.png"
            alt="Disrupt"
            className="h-8 w-auto"
          />
          <button
            onPointerDown={(e) => { e.stopPropagation(); handleClose(); }}
            aria-label="Close navigation menu"
            className="relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 active:bg-white/20"
            style={{ touchAction: "manipulation" }}
          >
            <svg className="w-5 h-5 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-grow flex flex-col justify-center px-8 -mt-16">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={handleClose}
              className={({ isActive }) =>
                `block py-3 text-3xl font-display font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Bottom — Apply + socials */}
        <div className="px-8 pb-8 space-y-6">
          <a
            href="/apply"
            className="block w-full text-center px-6 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition"
          >
            Apply
          </a>
          <div className="flex gap-6 justify-center">
            <a href="mailto:nufintech@gmail.com" className="text-sm text-gray-500 hover:text-white transition">Email</a>
            <a href="https://www.instagram.com/neudisrupt" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition">Instagram</a>
            <a href="https://www.linkedin.com/company/neudisrupt/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </nav>
    </div>,
    document.body
  );
}
