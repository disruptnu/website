import { CARD } from "./teamCarouselConstants";
import TeamShowcaseCard from "./TeamShowcaseCard";
import React, { useRef } from "react";
import leftScroll from "../../../img/LeftGreenArrow.svg";
import rightScroll from "../../../img/RightGreenArrow.svg";

export default function TeamCarousel() {
  const containerRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -600,
        behavior: "smooth",
      });
    }
  };
  // Scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: +600,
        behavior: "smooth",
      });
    }
  };

  // const totalCardWidth = CARD.length * 296; // Assuming each card is 300px wide

  return (
    <div>
      <div className="border-t border-solid border-t-gray-400">
        <div className="mt-60 text-white font-bold">
          <p
            className="pl-10 text-xs mt-20"
            style={{ fontFamily: "Usual-Light" }}
          >
            / The Team
          </p>
          <p
            className="text-6xl text-left w-3/5 ml-10 mb-20 pt-20"
            style={{
              fontFamily: "Faucet",
              fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on",
            }}
          >
            DISRUPT IS COLLABORATIVE, INCLUSIVE, & AGILE
          </p>
        </div>
        <div>
          <div className="flex justify-start text-blue-500 text-lg w-screen h-5 pr-10 mb-10">
            <img
              src={leftScroll}
              alt="Left Scroll Arrow"
              className={`hover:cursor-pointer mr-5 ml-10 ${
                CARD.length * 296 > window.innerWidth ? "" : "hidden"
              }`}
              onClick={scrollLeft}
            />
            <img
              src={rightScroll}
              alt="Right Scroll Arrow"
              className={`hover:cursor-pointer ${
                CARD.length * 296 > window.innerWidth ? "" : "hidden"
              }`}
              onClick={scrollRight}
            />
          </div>
        </div>
        <div
          className="flex flex-nowrap justify-start w-full h-3/4 text-2xl mt-4 mx-auto overflow-x-hidden divide-x divide-gray-800"
          ref={containerRef}
        >
          {CARD.map((card) => (
            <TeamShowcaseCard key={card.key} image={card.img} alt={card.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
