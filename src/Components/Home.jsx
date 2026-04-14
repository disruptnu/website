import React, { useState, useEffect } from "react";
import WhoWeAre from "./HomeComponents/WhoWeAre";
import OpeningScreen from "./HomeComponents/OpeningScreen";
import WhatWeDo from "./HomeComponents/WhatWeDo";
import Footer from "./HomeComponents/Footer";
import Header from "../Header";

export default function Home() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
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
    <div class>
      <Header
        hamburgerMenuOpen={hamburgerMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
      <OpeningScreen />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
