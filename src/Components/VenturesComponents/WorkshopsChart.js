import React from "react";
import { WORKSHOP_CARDS } from "./WorkshopConstants";
import WorkshopCard from "./WorkshopCard";
import chanceToWinStar from "../../img/chanceToWinStar.svg";

export default function WorkshopsChart() {
  return (
    <div className="flex flex-col items-center px-4 pb-10 sm:px-12 ">
  <p className="items-center mb-8 text-3xl font-bold text-white sm:text-5xl sm:mb-12">WORKSHOP SCHEDULE</p>
 
      <div className="flex-col items-center">
        {WORKSHOP_CARDS.map((card) => (
          <WorkshopCard
            key={card.key}
            header={card.header}
            workshopNum={card.workshopNum}
            date={card.date}
            startTime={card.startTime}
            endTime={card.endTime}
            topic1={card.topic1}
            topic2={card.topic2}
          />
        ))}
        <div className="flex items-center justify-start">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mr-6 md:mr-12 lg:mr-24 font-[Usual-Regular]">
        THE CHANCE TO WIN
      </p>
      <img src={chanceToWinStar} alt="star" className="h-12 md:h-16 lg:h-20" />
    </div>
      </div>
    </div>
  );
}
