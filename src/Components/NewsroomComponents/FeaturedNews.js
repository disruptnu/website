import { CARD } from "./newsroomConstants";
import React, { useRef } from "react";
import leftScroll from "../../img/LeftGreenArrow.svg";
import rightScroll from "../../img/RightGreenArrow.svg";

function FeaturedCard(props) {
  return (
    <div className="px-10 flex flex-col items-center min-w-max min-h-max">
      <img
        className="rounded-sm pb-2 w-130"
        src={props.image}
        alt={props.alt}
      />
      <div className="flex justify-between w-130 mx-5">
        <h3
          className="text-white font-bold"
          style={{
            fontFamily: "Faucet",
            fontFeatureSettings: "'ss03' on, 'ss02' on, 'ss01' on",
          }}
        >
          {props.header}
        </h3>
        <p className="text-white text-sm font-bold border border-solid border-white rounded-md py-1 px-2 text-center">
          Tag
        </p>
      </div>
    </div>
  );
}

export default function FeaturedNews() {
  const containerRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };
  // Scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: +500,
        behavior: "smooth",
      });
    }
  };

  // const totalCardWidth = CARD.length * 296; // Assuming each card is 300px wide

  return (
    <div>
      <div>
        <div
          className="flex justify-between items-center align-middle text-white text-xs ml-10 my-10 font-bold"
          style={{ fontFamily: "Usual-Light" }}
        >
          <h6 className="w-32">/ FEATURED</h6>
          <div className="flex justify-end text-blue-500 text-lg w-screen h-5 pr-10">
            <img
              src={leftScroll}
              alt="Left Scroll Arrow"
              className={`hover:cursor-pointer mx-5 ${
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
          className="flex flex-nowrap justify-start w-full h-3/4 text-2xl pb-14 mt-4 mx-auto overflow-x-hidden divide-x divide-gray-800"
          ref={containerRef}
        >
          {CARD.map((card) => (
            <FeaturedCard
              key={card.key}
              image={card.img}
              header={card.header}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
