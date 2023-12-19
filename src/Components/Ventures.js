import React, { useState, useEffect } from "react";
import VenturesOpeningScreen from "./VenturesComponents/VenturesOpeningScreen";
import WorkshopsChart from "./VenturesComponents/WorkshopsChart";

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
  });

  return (
    <div>
      <VenturesOpeningScreen
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
      <WorkshopsChart />
    </div>
  );
}
