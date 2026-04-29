import React from "react";
import { NavLink } from "react-router-dom";
import caseImage1 from "../../img/CaseImage1.webp";
import caseImage2 from "../../img/CaseImage2.webp";
import caseImage3 from "../../img/CaseImage3.webp";

const CARD = [
  { key: "1", img: caseImage1, header: "Intro To SQL", alt: "Intro to SQL event" },
  { key: "2", img: caseImage2, header: "Finnovate Pitch Day", alt: "Finnovate Pitch Day event" },
  { key: "3", img: caseImage3, header: "Speaker Event", alt: "Speaker event" },
];

export default function Events() {
  return (
    <section className="bg-white">
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-sm text-text-muted uppercase tracking-wide mb-8">Events</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {CARD.map((card) => (
            <div key={card.key}>
              <img className="w-full rounded mb-3" src={card.img} alt={card.alt} loading="lazy" />
              <h3 className="text-text-primary font-bold">{card.header}</h3>
            </div>
          ))}
        </div>
        <div className="text-center">
          <NavLink to="/past-ventures" className="text-text-primary font-medium hover:underline">
            View All Cases &rarr;
          </NavLink>
        </div>
      </div>
    </section>
  );
}
