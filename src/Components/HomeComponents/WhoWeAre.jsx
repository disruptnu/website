import React from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "../shared/FadeIn";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
          Who We Are
        </h2>
        <p className="text-base text-text-muted mb-8">
          The home for all things fintech.
        </p>
      </FadeIn>
      <FadeIn delay={150}>
        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl">
          <span className="text-text-primary font-medium">Four branches</span>,
          80+ members, and a track record that goes back six years. We're the
          largest undergraduate fintech club at Northeastern, and everything we do
          produces something real.{" "}
          <NavLink to="/about" className="text-text-primary font-medium underline">
            More about us &rarr;
          </NavLink>
        </p>
      </FadeIn>
      </div>
    </section>
  );
}
