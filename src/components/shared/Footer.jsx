import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;

    const updateHeight = () => {
      setFooterHeight(footerRef.current.offsetHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const images = footerRef.current.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", updateHeight);
      }
    });

    return () => {
      window.removeEventListener("resize", updateHeight);
      images.forEach((img) => img.removeEventListener("load", updateHeight));
    };
  }, []);

  return (
    <>
      <div style={{ height: footerHeight }} />

      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 bg-surface-primary px-6 pt-24 pb-10 text-white z-0"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Top row: CTA + nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-6 gap-y-10 md:text-left mb-16 items-start">
            {/* Join CTA */}
            <div>
              <h3 className="text-xl font-display mb-4">Join Disrupt</h3>
              <p className="text-sm text-gray-400 mb-6">
                Applications open at the start of each semester.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition"
              >
                Apply
              </a>
            </div>

            {/* Branches */}
            <div className="space-y-2">
              <h4 className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-500">
                Branches
              </h4>
              <NavLink
                to="/consulting"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Consulting
              </NavLink>
              <NavLink
                to="/quant"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Quant
              </NavLink>
              <NavLink
                to="/research"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Research
              </NavLink>
              <NavLink
                to="/finnovate"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Finnovate
              </NavLink>
            </div>

            {/* Club */}
            <div className="space-y-2">
              <h4 className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-500">
                Club
              </h4>
              <NavLink
                to="/events"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Events
              </NavLink>
              <NavLink
                to="/about"
                className="block text-sm text-gray-400 hover:text-white"
              >
                About
              </NavLink>
            </div>

            {/* Socials */}
            <div className="space-y-2">
              <h4 className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-500">
                Socials
              </h4>
              <a
                href="mailto:nufintech@gmail.com"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Email
              </a>
              <a
                href="https://www.instagram.com/neudisrupt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/neudisrupt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://disrupt-fintech.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white"
              >
                Medium
              </a>
            </div>
          </div>

          {/* Oversized logo */}
          <div className="flex justify-center mt-8 mb-10">
            <img
              src="/logos/Brandmark+Wordmark_Light_Large.png"
              alt="Disrupt"
              className="w-full opacity-15"
            />
          </div>

          {/* Copyright */}
          <div className="text-left text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Disrupt. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
