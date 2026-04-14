import React from "react";
import { NavLink } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-800">
      <p className="text-sm text-gray-400 uppercase tracking-wide mb-8">Who We Are</p>
      <p className="text-2xl text-white mb-8">
        At Northeastern University, we have recognized the disruptive
        influence of technology in finance and have started Disrupt to foster
        collaboration aimed at reshaping the finance industry.
      </p>
      <NavLink to="/about" className="text-brand-lime hover:underline">
        Read more &rarr;
      </NavLink>
    </section>
  );
}
