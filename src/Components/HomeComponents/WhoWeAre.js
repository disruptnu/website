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
        className="text-white text-xs pl-10 pt-5 font-bold"
        style={{ fontFamily: "Usual-Light" }}
      >
        <h6>/ WHO WE ARE</h6>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-bold text-2xl pb-8 mt-24 mx-auto w-1/2 text-left">
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
