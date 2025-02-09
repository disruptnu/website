import React from "react";
import { NavLink } from "react-router-dom";
import venturesImage from "../../img/homeVenturesProgram.svg";
import consultingImage from "../../img/homeConsultingProgram.svg";
import eventsImage from "../../img/homeEventsProgram.svg";
import num1 from "../../img/num1.svg";
import num2 from "../../img/num2.svg";
import num3 from "../../img/num3.svg";
import chevronBtn from "../../img/chevronBtn.svg";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const programs = [
  {
    name: "EVENTS",
    description:
      "Attend our guest speaker events and technology to learn about the ways FinTech in changing industries.",
    numberIcon: num1,
    img: eventsImage,
    navLink: "/events",
  },
  {
    name: "FINNOVATE",
    description:
      "Develop the skills necessary to create and pitch your very own FinTech Startup.",
    numberIcon: num2,
    img: venturesImage,
    navLink: "/finnovate",
  },
  {
    name: "CONSULTING",
    description:
      "Work with FinTech firms in the Boston area on professional consulting projects.",
    numberIcon: num3,
    img: consultingImage,
    navLink: "/consulting",
  },
];

export default function WhatWeDo() {
  return (
    <div className="border-b border-solid border-b-gray-400">
      <div className="pt-10 pl-10 text-xs font-bold text-white" style={{ fontFamily: "Usual-Light" }}>
        <h6>WHAT WE DO</h6>
      </div>
      <ul className="px-10 mb-10 divide-y divide-gray-800 md:px-20 lg:px-40 xl:px-80">
        {programs.map((program) => (
          <NavLink key={program.name} onClick={scrollToTop} to={program.navLink}>
            <li className="flex flex-col justify-between gap-6 py-5 md:flex-row">
              <div className="flex flex-col items-center min-w-0 gap-4 md:flex-row">
                <img className="flex-none h-40 bg-black w-60 md:h-60 md:w-80" src={program.img} alt="" />
                <div className="min-w-0">
                  <img className="pb-5" src={program.numberIcon} alt="" />
                  <p className="text-2xl font-bold leading-8 text-white md:text-4xl md:leading-11" style={{ fontFamily: "Faucet", fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on" }}>{program.name}</p>
                  <p className="mt-1 leading-6 text-white text-md md:text-lg" style={{ fontFamily: "Usual-Light" }}>{program.description}</p>
                </div>
              </div>
              <div className="hidden sm:flex sm:items-end">
                <button>
                  <img src={chevronBtn} alt="" />
                </button>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
