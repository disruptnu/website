import { CARD } from "./newsroomConstants";
import FeaturedCard from "./FeaturedNews/FeaturedCard";
import React, { useRef } from "react";
import leftScroll from "../../img/LeftGreenArrow.svg";
import rightScroll from "../../img/RightGreenArrow.svg";

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
    }
    // Scroll right
    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: +500,
                behavior: "smooth",
            });
        }
    }

    // const totalCardWidth = CARD.length * 296; // Assuming each card is 300px wide

  return (
    <div>
      <div>
        <div className="flex justify-between items-center align-middle text-white text-xs ml-10 my-10 font-bold" style={{fontFamily: "Usual-Light"}}>
            <h6 className="w-32">
                / FEATURED
            </h6>
            <div className="flex justify-end text-blue-500 text-lg w-screen h-5 pr-10">
                <img src={leftScroll}
                     alt="Left Scroll Arrow"
                     className={`hover:cursor-pointer mx-5 ${CARD.length * 296 > window.innerWidth ? '' : 'hidden'}`}
                     onClick={scrollLeft}/>
                <img src={rightScroll}
                     alt="Right Scroll Arrow"
                     className={`hover:cursor-pointer ${CARD.length * 296 > window.innerWidth ? '' : 'hidden'}`}
                     onClick={scrollRight}/>
            </div>
        </div>
        <div className="flex flex-nowrap justify-start w-full h-3/4 text-2xl pb-14 mt-4 mx-auto overflow-x-hidden divide-x divide-gray-800" ref={containerRef}>
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
