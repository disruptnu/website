import React from "react";
import { WORKSHOP_CARDS } from "./WorkshopConstants";
import WorkshopCard from "./WorkshopCard";
import PastVenturesGallery from "../PastVenturesComponents/PastVentureCard";

export default function WorkshopsChart() {
  return (
    <div className="text-white">
      {/* Workshop Schedule */}
      <section className="px-6 py-16 max-w-3xl mx-auto border-b border-gray-800">
        <h2 className="text-3xl font-faucet text-center mb-8">Workshop Schedule</h2>
        <div className="space-y-4">
          {WORKSHOP_CARDS.map((card, index) => (
            <WorkshopCard
              key={card.key}
              index={index}
              header={card.header}
              workshopNum={card.workshopNum}
              date={card.date}
              startTime={card.startTime}
              endTime={card.endTime}
              topic1={card.topic1}
              topic2={card.topic2}
            />
          ))}
        </div>
      </section>

      {/* Past Ventures */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-faucet text-center mb-4">Past Ventures</h2>
        <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          Take a look at what our past ventures have accomplished — innovative projects that made it all the way to the finish line.
        </p>
        <PastVenturesGallery />
      </section>
    </div>
  );
}
