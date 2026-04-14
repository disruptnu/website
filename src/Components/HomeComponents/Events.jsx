import React from "react";
import { NavLink } from "react-router-dom";
import caseImage1 from "../../img/CaseImage1.svg";
import caseImage2 from "../../img/CaseImage2.svg";
import caseImage3 from "../../img/CaseImage3.svg";

const CARD = [
  { key: "1", img: caseImage1, header: "Intro To SQL", alt: "Intro to SQL event" },
  { key: "2", img: caseImage2, header: "Finnovate Pitch Day", alt: "Finnovate Pitch Day event" },
  { key: "3", img: caseImage3, header: "Speaker Event", alt: "Speaker event" },
];

export default function Events() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-800">
      <p className="text-sm text-gray-400 uppercase tracking-wide mb-8">Events</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {CARD.map((card) => (
          <div key={card.key}>
            <img className="w-full rounded mb-3" src={card.img} alt={card.alt} />
            <h3 className="text-white font-bold">{card.header}</h3>
          </div>
        ))}
      </div>
      <div className="text-center">
        <NavLink to="/past-ventures" className="text-brand-lime hover:underline">
          View All Cases &rarr;
        </NavLink>
      </div>
    </section>
  );
}
