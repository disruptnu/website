import React from "react";
import { CARD } from "./WorkshopConstants";
import WorkshopCard from "./WorkshopCard";
import chanceToWinStar from "../../img/chanceToWinStar.svg";

export default function WorkshopsChart() {
  return (
    <div className="pl-12 pb-72">
      <p className="text-white font-bold text-5xl mb-12"
         style={{fontFamily: 'Usual-Regular'}}>
        WORKSHOP SCHEDULE
      </p>
      <div className="">
        {CARD.map((card) => (
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
        <div className="flex items-center">
          <p className="text-white font-bold text-5xl"
             style={{fontFamily: 'Usual-Regular'}}>
              THE CHANCE TO WIN
          </p>
          <img
            src={chanceToWinStar}
            alt="star"
            className="ml-24 pl-1.5 h-16"
          />
        </div>
      </div>
    </div>
  );
}
