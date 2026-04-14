import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "../shared/FadeIn";
import venturesImage from "../../img/homeVenturesProgram.webp";
import consultingImage from "../../img/homeConsultingProgram.webp";
import quantImage from "../../img/FinhackImg2.webp";
import researchImage from "../../img/CaseImage2.webp";

const branches = [
  {
    name: "Consulting",
    description:
      "Semester-long engagements with funded startups. Strategy and dev, working on the same client.",
    img: consultingImage,
    navLink: "/consulting",
    bg: "bg-[#1a1a2e]",
  },
  {
    name: "Quant",
    description:
      "Building and backtesting trading strategies on real market data.",
    img: quantImage,
    navLink: "/quant",
    bg: "bg-[#1a2e1a]",
  },
  {
    name: "Research",
    description:
      "Weekly fintech analysis, published on Medium.",
    img: researchImage,
    navLink: "/research",
    bg: "bg-[#2e1a1a]",
  },
  {
    name: "Finnovate",
    description:
      "8-week venture accelerator. Build a startup, pitch for up to $1,000. No experience required.",
    img: venturesImage,
    navLink: "/finnovate",
    bg: "bg-[#1a2e2e]",
  },
];

const CYCLE_INTERVAL = 5000;

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % branches.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">Our Branches</h2>
        <p className="text-base text-text-muted mb-8">Four teams, each producing real work every semester.</p>
      </FadeIn>

      {/* Accordion cards */}
      <div
        className="flex gap-3 h-[420px] md:h-[480px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {branches.map((branch, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={branch.name}
              onClick={() => setActiveIndex(i)}
              className={`relative overflow-hidden rounded-hero cursor-pointer transition-all duration-700 ease-in-out ${
                branch.bg
              } ${isActive ? "flex-[4]" : "flex-[0.6]"}`}
            >
              {/* Background image */}
              {branch.img && (
                <img
                  src={branch.img}
                  alt={branch.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  loading="lazy"
                />
              )}

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Collapsed state — vertical label */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <span className="text-white font-medium text-sm tracking-wide whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
                  {branch.name}
                </span>
              </div>

              {/* Expanded state — content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">
                  {branch.name}
                </h3>
                <p className="text-white/70 text-sm md:text-base mb-4 max-w-md">
                  {branch.description}
                </p>
                <NavLink
                  to={branch.navLink}
                  className="inline-block self-start px-5 py-2 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition"
                >
                  Learn more
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
