import React from "react";
import { NavLink } from "react-router-dom";
import readMoreArrow from "../../img/ReadMoreRightArrow.svg";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Get rid of NavLink section if you don't want to make individual pages for ventures

export default function PastVentureCard(props) {
  return (
    <div className="relative w-130 px-10">
      <div className="relative group border-2 rounded-md">
        <img
          className="rounded-sm w-120 transition duration-300 ease-in-out filter brightness-100 group-hover:brightness-25"
          src={props.image}
          alt={props.alt}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-300 ease-in-out opacity-100 group-hover:opacity-100">
          <div className="absolute bottom-0 right-10 text-white p-4 opacity-100 group-hover:opacity-0">
            <h3
              className="text-white font-bold mb-0"
              style={{
                fontFamily: "Faucet",
                fontFeatureSettings: "'ss03' on, 'ss02' on, 'ss01' on",
              }}
            >
              {props.header}
            </h3>
          </div>
          <div className="absolute top-4 left-10 text-white p-4 opacity-0 group-hover:opacity-100">
            <p
              className="text-white font-bold mb-0"
              style={{
                fontFamily: "Faucet",
                fontFeatureSettings: "'ss03' on, 'ss02' on, 'ss01' on",
              }}
            >
              {props.header}
            </p>
            <p
              className="text-white text-lg mr-8 mb-0 mt-5"
              style={{ fontFamily: "Usual-Regular" }}
            >
              {props.description}
            </p>
            <NavLink onClick={scrollToTop} to="/finnovate">
              <div className="flex items-center text-sm text-[#b5f727] mt-20">
                <p className="mr-2">Read About Ventures</p>
                <img src={readMoreArrow} alt="rightArrow" className="mt-0.5" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
