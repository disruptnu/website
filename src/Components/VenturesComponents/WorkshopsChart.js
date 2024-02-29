import React from "react";
import { WORKSHOP_CARDS } from "./WorkshopConstants";
import WorkshopCard from "./WorkshopCard";
import chanceToWinStar from "../../img/chanceToWinStar.svg";

export default function WorkshopsChart() {
  return (
    <div className="flex flex-col items-center w-full pb-10 sm:px-12">
    <p className="mb-8 text-3xl font-bold text-center text-white sm:mb-12 sm:text-5xl">WORKSHOP SCHEDULE</p>
    <div className="">
      {/* Assuming WorkshopCard components are block elements or flex items that can be centered */}
      {WORKSHOP_CARDS.map((card) => (
        <WorkshopCard
            header={card.header}
            workshopNum={card.workshopNum}
            date={card.date}
            startTime={card.startTime}
            endTime={card.endTime}
            topic1={card.topic1}
            topic2={card.topic2}
          />
        ))}
        <div className="flex items-center justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mr-6 md:mr-12 lg:mr-24 font-[Usual-Regular]">
            THE CHANCE TO WIN
          </p>
          <img src={chanceToWinStar} alt="star" className="h-12 md:h-16 lg:h-20" />
        </div>
      </div>
    </div>
  );
}
