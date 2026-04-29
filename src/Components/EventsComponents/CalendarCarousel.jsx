import React, { useState } from "react";
import { EVENT_DATA } from "./eventConstants";
import EventCard from "./eventCard";
import FadeIn from "../shared/FadeIn";

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
    <section>
      <div className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
            Calendar
          </h2>
          <p className="text-base text-text-muted mb-10">
            Browse events by month.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={prevMonth}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
            >
              &larr;
            </button>
            <h3 className="text-2xl font-display font-medium text-text-primary min-w-[140px] text-center">
              {MONTHS[currentMonth]}
            </h3>
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
            >
              &rarr;
            </button>
          </div>
        </FadeIn>

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
          <p className="text-text-muted">No events this month.</p>
        )}
      </div>
    </section>
  );
}
