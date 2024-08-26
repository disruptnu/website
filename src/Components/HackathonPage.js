import React from "react";
import OverviewSection from "./HackathonComponents/OverviewComponents/Overview";
import TracksSection from "./HackathonComponents/TracksComponents/Tracks";
import SpeakersSection from "./HackathonComponents/SpeakerComponents/Speaker";
import FAQSection from "./HackathonComponents/FAQComponents/FAQ";
import SponsorsSection from "./HackathonComponents/SponsorsComponents/Sponsor";
import ApplySection from "./HackathonComponents/ApplyComponents/Apply";
import StockTicker from "./HackathonComponents/StockTickerComponent/StockTicker";
import logo from "../img/logo_a.svg";

export default function HackathonPage() {
  return (
    <div className="text-white">

      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 z-50 flex items-center justify-center w-full p-4 space-x-20 text-white bg-customDarkBlue">
        <div className="flex items-center space-x-8">
          {/* Left Navigation Links */}
          <a href="#overview" className="hover:text-green-500">
            Overview
          </a>
          <a href="#tracks" className="hover:text-green-500">
            Tracks
          </a>
          <a href="#speakers" className="hover:text-green-500">
            Speakers
          </a>
        </div>

        {/* Centered Logo Image */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src={logo} alt="Home" className="h-12" />
          </a>
        </div>

        <div className="flex items-center space-x-8">
          {/* Right Navigation Links */}
          <a href="#apply" className="hover:text-green-500">
            Apply
          </a>
          <a href="#faq" className="hover:text-green-500">
            FAQ
          </a>
          <a href="#sponsors" className="hover:text-green-500">
            Sponsors
          </a>
        </div>
      </nav>

      {/* Offset for the fixed navbar */}
      <div className="pt-24 pb-10">
        <OverviewSection />
        <TracksSection />
        <FAQSection />
        <SpeakersSection />
        <SponsorsSection />
        <ApplySection />
      </div>

      {/* Fixed Stock Ticker at the bottom */}
      <div className="fixed bottom-0 left-0 w-full p-2 text-white bg-black">
        <StockTicker />
      </div>
    </div>
  );
}
