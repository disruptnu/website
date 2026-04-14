import React, { useState, useEffect } from "react";
import PastVenturesOpeningScreen from "./PastVenturesComponents/PastVenturesOpeningScreen";
import PastVenturesExamples from "./PastVenturesComponents/PastVenturesExamples";
import Footer from "./HomeComponents/Footer";
import Header from "../Header";

export default function PastVentures() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  // Stop scrolling when Hamburger Menu is Open (hide overflow)
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
    <div class>
      <Header
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
      <PastVenturesOpeningScreen />
      <PastVenturesExamples />
      <Footer />
    </div>
  );
}
