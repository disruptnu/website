import React from "react";
import { NavLink } from "react-router-dom";
import venturesImage from "../../img/homeVenturesProgram.svg";
import consultingImage from "../../img/homeConsultingProgram.svg";
import eventsImage from "../../img/homeEventsProgram.svg";

const programs = [
  {
    name: "Events",
    description:
      "Attend our guest speaker events and technology workshops to learn about the ways FinTech is changing industries.",
    img: eventsImage,
    navLink: "/events",
  },
  {
    name: "Finnovate",
    description:
      "Develop the skills necessary to create and pitch your very own FinTech Startup.",
    img: venturesImage,
    navLink: "/finnovate",
  },
  {
    name: "Consulting",
    description:
      "Work with FinTech firms in the Boston area on professional consulting projects.",
    img: consultingImage,
    navLink: "/consulting",
  },
];

export default function WhatWeDo() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-800">
      <p className="text-sm text-gray-400 uppercase tracking-wide mb-8">What We Do</p>
      <div className="space-y-10">
        {programs.map((program) => (
          <NavLink key={program.name} to={program.navLink} className="flex flex-col md:flex-row gap-6 group">
            <img className="w-full md:w-64 h-40 object-cover bg-gray-900 rounded" src={program.img} alt={program.name} />
            <div>
              <h3 className="text-2xl font-faucet text-white mb-2">{program.name}</h3>
              <p className="text-gray-300 mb-2">{program.description}</p>
              <span className="text-brand-lime text-sm">Learn more &rarr;</span>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
