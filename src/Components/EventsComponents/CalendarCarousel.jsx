import React, { useState } from "react";
import { EVENT_DATA } from "./eventConstants";
import EventCard from "./eventCard";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function CalendarCarousel() {
  const [currentMonth, setCurrentMonth] = useState(0);

  const nextMonth = () => setCurrentMonth((prev) => (prev + 1) % 12);
  const prevMonth = () => setCurrentMonth((prev) => (prev - 1 + 12) % 12);

  const filteredEvents = EVENT_DATA.filter(
    (event) => event.month && event.month.toUpperCase() === MONTHS[currentMonth].toUpperCase()
  );

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-800">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={prevMonth} className="text-white text-2xl px-2">&larr;</button>
        <h2 className="text-2xl font-faucet text-white">{MONTHS[currentMonth]}</h2>
        <button onClick={nextMonth} className="text-white text-2xl px-2">&rarr;</button>
      </div>
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      ) : (
        <p className="text-gray-500">No events this month.</p>
      )}
    </section>
  );
}
