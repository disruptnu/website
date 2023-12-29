import React, { useRef } from "react";
import leftScroll from "../../img/LeftGreenArrow.svg";
import rightScroll from "../../img/RightGreenArrow.svg";
import { NavLink } from "react-router-dom";
import caseImage1 from "../../img/CaseImage1.svg";
import caseImage2 from "../../img/CaseImage2.svg";
import caseImage3 from "../../img/CaseImage3.svg";
import content from "../../Content/content.js";

const CARD = [
  {
    key: "test1",
    img: caseImage1,
    header: content.home.caseStudies.test1Header,
    alt: "First test image alternative",
  },
  {
    key: "test2",
    img: caseImage2,
    header: content.home.caseStudies.test2Header,
    alt: "Second test image alternative",
  },
  {
    key: "test3",
    img: caseImage3,
    header: content.home.caseStudies.test3Header,
    alt: "Third test image alternative",
  },
  {
    key: "test4",
    img: caseImage1,
    header: content.home.caseStudies.test4Header,
    alt: "Fourth test image alternative",
  },
  {
    key: "test5",
    img: caseImage1,
    header: "Test Case 5",
    alt: "Fifth test image alternative",
  },
  {
    key: "test6",
    img: caseImage1,
    header: "Test Case 6",
    alt: "Sixth test image alternative",
  },
];

function CaseStudyCard(props) {
  return (
    <div className="px-10 flex flex-col items-center min-w-max min-h-max">
      <img className="rounded-sm pb-2 w-96" src={props.image} alt={props.alt} />
      <div className="flex justify-between w-96 mx-5">
        <h3
          className="text-blue-500 font-bold"
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

export default function CaseStudy() {
  const containerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
      <div className="border-b border-solid border-b-gray-400">
        <div
          className="flex justify-between items-center align-middle text-white text-xs ml-10 my-10 font-bold"
          style={{ fontFamily: "Usual-Light" }}
        >
          <h6 className="w-32">/ CASE STUDIES</h6>
          <div className="flex justify-end text-blue-500 text-lg w-screen h-5 pr-10">
            <img
              src={leftScroll}
              alt="Left Scroll Arrow"
              className={`hover:cursor-pointer mx-5`}
              onClick={scrollLeft}
            />
            <img
              src={rightScroll}
              alt="Right Scroll Arrow"
              className={`hover:cursor-pointer  `}
              onClick={scrollRight}
            />
          </div>
        </div>
        <div
          className="flex flex-nowrap justify-start w-full h-3/4 text-2xl pb-14 mt-4 mx-auto overflow-x-hidden divide-x divide-gray-800"
          ref={containerRef}
        >
          {CARD.map((card) => (
            <CaseStudyCard
              key={card.key}
              image={card.img}
              header={card.header}
              alt={card.alt}
            />
          ))}
        </div>
        <div className="flex justify-center pb-14">
          <NavLink
            to="/PastVentures"
            onClick={scrollToTop}
            className="text-white text-base px-4 py-2 font-bold bg-black border border-solid border-[#b5f727] hover:text-black hover:bg-[#b5f727] rounded-full"
          >
            View All Cases
          </NavLink>
        </div>
      </div>
    </div>
  );
}
