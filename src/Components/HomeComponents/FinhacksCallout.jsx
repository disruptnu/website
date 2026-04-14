import React from "react";
import { NavLink } from "react-router-dom";

export default function FinhacksCallout() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-200">
      <div className="bg-surface-primary rounded-hero p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">Finhacks</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">
          Our flagship 48-hour fintech hackathon, and the event the whole
          semester builds toward.
        </p>
        <NavLink
          to="/events"
          className="inline-block px-6 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition"
        >
          Learn more &rarr;
        </NavLink>
      </div>
    </section>
  );
}
