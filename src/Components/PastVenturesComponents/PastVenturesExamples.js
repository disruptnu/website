import { CARD } from "./PastVenturesConstants";
import PastVenturesCard from "./PastVentureCard";
import React from "react";
// import { NavLink } from "react-router-dom";

export default function PastVenturesExamples() {
  // const totalCardWidth = CARD.length * 296; // Assuming each card is 300px wide

  return (
    <div className="flex flex-col justify-center items-center border-b border-solid border-b-gray-400">
      <div className="grid grid-cols-3 gap-y-8 gap-x-2 w-full max-w-screen-desktopMax h-3/4 justify-items-center text-2xl pb-14 mt-4 mx-auto overflow-x-hidden">
        {CARD.map((card) => (
          <PastVenturesCard
            key={card.key}
            image={card.img}
            header={card.header}
            description={card.description}
            alt={card.alt}
          />
        ))}
      </div>
    </div>
  );
}
