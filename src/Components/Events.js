import React, { useState, useEffect } from "react";
import EventsLanding from "./EventsComponents/EventsLanding";
import Calendar from "./EventsComponents/Calendar";
import Footer from "./HomeComponents/Footer";

export default function Events() {
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
  }, [hamburgerMenuOpen]); // Add hamburgerMenuOpen as a dependency to re-run effect when it changes

  return (
    <div className="flex flex-col h-full">
      <EventsLanding
        toggleHamburgerMenu={toggleHamburgerMenu}
        hamburgerMenuOpen={hamburgerMenuOpen}
      />
      <div className="flex-grow">
        <Calendar />
      </div>
      <Footer />
    </div>
  );
}
