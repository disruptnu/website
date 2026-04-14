import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "./shared/Footer";

export default function Layout() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (hamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hamburgerMenuOpen]);

  return (
    <>
      <Header
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
