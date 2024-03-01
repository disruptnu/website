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

  const filteredEvents = EVENT_DATA.filter((event) => {
    const monthInitial = months[currentMonth].charAt(0);
    return event.month && event.month.charAt(0) === monthInitial;
  });

  return (
    <div className="=items-center border-b border-solid border-b-gray-400">
      <div className="flex items-center w-full px-5 py-6">
        <div className="flex items-center space-x-5">
          <button className="flex items-center" onClick={prevMonth}>
            <img src={arrowLeft} alt="Previous Month" />
          </button>
          <p className="mb-1 text-4xl text-white">{months[currentMonth]}</p>
          <button className="flex items-center" onClick={nextMonth}>
            <img src={arrowRight} alt="Next Month" />
          </button>
        </div>
      </div>
      <div className="grid items-center grid-cols-1 gap-4 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-14">
        {filteredEvents.map((card) => (
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
  );
};

export default CalendarCarousel;
