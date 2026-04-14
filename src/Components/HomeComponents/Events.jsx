import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import leftScroll from "../../img/LeftGreenArrow.svg";
import rightScroll from "../../img/RightGreenArrow.svg";
import caseImage1 from "../../img/CaseImage1.svg";
import caseImage2 from "../../img/CaseImage2.svg";
import caseImage3 from "../../img/CaseImage3.svg";

const CARD = [
  {
    key: "test1",
    img: caseImage1,
    header: "Intro To SQL",
    alt: "First test image alternative",
  },
  {
    key: "test2",
    img: caseImage2,
    header: "Finnovate Pitch Day",
    alt: "Second test image alternative",
  },
  {
    key: "test3",
    img: caseImage3,
    header: "Speaker Event 1",
    alt: "Third test image alternative",
  },
  {
    key: "test4",
    img: caseImage1,
    header: "Speaker Event 2",
    alt: "Fourth test image alternative",
  },
  {
    key: "test5",
    img: caseImage1,
    header: "Speaker Event 2",
    alt: "Fifth test image alternative",
  },
  {
    key: "test6",
    img: caseImage1,
    header: "Speaker Event 3",
    alt: "Sixth test image alternative",
  },
];

function CaseStudyCard(props) {
  return (
    <div className="flex flex-col items-center px-5 sm:px-10">
      <img className="w-full pb-2 rounded-sm" src={props.image} alt={props.alt} />
      <div className="flex justify-between w-full mx-2 sm:mx-5">
        <h3
          className="text-sm font-bold text-blue-500 sm:text-base"
          style={{
            fontFamily: "Faucet",
            fontFeatureSettings: "'ss03' on, 'ss02' on, 'ss01' on",
          }}
        >
          {props.header}
        </h3>
      </div>
    </div>
  );
}

export default function Events() {
  const containerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const cardWidth = 320; // Adjust this value based on the actual width of your cards
      const scrollAmount = Math.floor(containerWidth / cardWidth) * cardWidth;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const cardWidth = 320; // Adjust this value based on the actual width of your cards
      const scrollAmount = Math.floor(containerWidth / cardWidth) * cardWidth;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div>
      <div className="border-b border-solid border-b-gray-400">
        <div className="flex items-center justify-between my-5 ml-5 text-xs font-bold text-white align-middle sm:my-10 sm:ml-10 sm:text-sm" style={{ fontFamily: "Usual-Light" }}>
          <h6 className="w-32">EVENTS</h6>
          <div className="flex justify-end w-screen h-5 pr-5 text-lg text-blue-500 sm:w-auto sm:pr-10">
            <img src={leftScroll} alt="Left Scroll Arrow" className="mx-2 hover:cursor-pointer sm:mx-5" onClick={scrollLeft} />
            <img src={rightScroll} alt="Right Scroll Arrow" className="mx-2 hover:cursor-pointer sm:mx-5" onClick={scrollRight} />
          </div>
        </div>
        <div className="flex justify-start w-full mx-auto mt-4 overflow-x-auto text-2xl divide-x divide-gray-800 sm:overflow-x-hidden flex-nowrap h-3/4 pb-14" ref={containerRef}>
          {CARD.map((card) => (
            <CaseStudyCard key={card.key} image={card.img} header={card.header} alt={card.alt} />
          ))}
        </div>
        <div className="flex justify-center pb-14">
          <NavLink to="/PastVentures" onClick={scrollToTop} className="text-white text-base px-4 py-2 font-bold bg-black border border-solid border-[#b5f727] hover:text-black hover:bg-[#b5f727] rounded-full">
            View All Cases
          </NavLink>
        </div>
      </div>
    </div>
  );
}
