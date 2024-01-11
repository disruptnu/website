import React, { useState } from "react";
import { EVENT_DATA } from "./eventConstants";
import EventCard from "./eventCard";
import arrowLeft from "../../img/arrowLeft.svg";
import arrowRight from "../../img/arrowRight.svg";

const CalendarCarousel = () => {
  const months = [
    "JANUARY 2024",
    "FEBRUARY 2024",
    "MARCH 2024",
    "APRIL 2024",
    "MAY 2024",
    "JUNE 2024",
    "JULY 2024",
    "AUGUST 2024",
    "SEPTEMBER 2024",
    "OCTOBER 2024",
    "NOVEMBER 2024",
    "DECEMBER 2024",
  ];
  const [currentMonth, setCurrentMonth] = useState(0);

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
  };

  // Justify start on the div before the card map is making it such that it's starting more to the left,
  // do we want to center it or keep it to the left so it can carousel between more if they're added
  // CURRENTLY IS AT JUSTIFY-CENTER

  return (
    <div>
      <div className="border-b border-solid border-b-gray-400">
        <div className="w-screen flex items-center px-5 py-6">
          <div className="flex items-center space-x-5 pl-36">
            <button className="flex items-center" onClick={prevMonth}>
              <img src={arrowLeft} alt="" />
            </button>
            <p className="text-white text-4xl mb-1">{months[currentMonth]}</p>
            <button className="flex items-center" onClick={nextMonth}>
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center align-middle text-white text-xs ml-5 my-10 font-bold"></div>
        <div className="flex flex-nowrap justify-center h-3/4 text-2xl pb-14 mt-4 mx-auto overflow-x-hidden w-5/6">
          {EVENT_DATA.map((card) => (
            <EventCard
              key={card.key}
              image={card.img}
              header={card.header}
              alt={card.alt}
              day={card.day}
              month={card.month}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarCarousel;
