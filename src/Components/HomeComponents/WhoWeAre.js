import React from "react";
import { NavLink } from "react-router-dom";
import readMoreArrow from "../../img/ReadMoreRightArrow.svg";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function WhoWeAre() {
  return (
    <div
      className="border-b border-solid border-b-gray-400"
      style={{ fontFamily: "Usual-Regular" }}
    >
      <div
        className="pt-5 pl-10 text-xs font-bold text-white"
        style={{ fontFamily: "Usual-Light" }}
      >
        <h6>WHO WE ARE</h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="w-1/2 pb-8 mx-auto mt-24 text-2xl font-bold text-left text-white">
          At Northeastern University, we have recognized the disruptive
          influence of technology in finance and have started Disrupt to foster
          collaboration aimed at reshaping the finance industry.
        </p>
        <div className="text-[#b5f727] mb-16">
          <NavLink onClick={scrollToTop} to="/about">
            <div className="flex items-center justify-center">
              <p className="mr-2">Read more</p>
              <img src={readMoreArrow} alt="rightArrow" className="mt-0.5" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
