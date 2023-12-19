import React from "react";
import { programs } from "./WhatWeDoConstants";
import chevronBtn from "../../../img/chevronBtn.svg";
import { NavLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

export default function WhatWeDo() {
  return (
    <div className="border-b border-solid border-b-gray-400">
            <div className="text-white text-xs pl-10 pt-10 font-bold" style={{fontFamily: "Usual-Light"}}>
                <h6>/ WHAT WE DO</h6>
            </div>
      <ul className="divide-y divide-gray-800 px-80 mb-10">
        {programs.map((program) => (
          <div>
          <NavLink onClick={scrollToTop} to={program.navLink}>
            <li
              key={program.description}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-60 w-80 flex-none bg-black"
                  src={program.img}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <img className="pb-10" src={program.numberIcon} alt="" />
                  <p className="text-4xl font-bold leading-11 text-white"
                     style={{fontFamily: "Faucet", fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on"}}>
                    {program.name}
                  </p>
                  <p className="mt-1 text-md leading-5 text-white" style={{fontFamily: "Usual-Light"}}>
                    {program.description}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end mt-auto mb-0	">
                <button>
                  <img src={chevronBtn} alt="" />
                </button>
              </div>
            </li>
          </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
}
