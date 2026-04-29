import React from "react";
import EventsLanding from "./EventsComponents/EventsLanding";
import FinhacksSection from "./EventsComponents/FinhacksSection";
import Calendar from "./EventsComponents/Calendar";
import FadeIn from "./shared/FadeIn";

export default function Events() {
  return (
    <>
      <EventsLanding />
      <FinhacksSection />
      <Calendar />

      {/* CTA */}
      <section className="bg-white">
        <FadeIn>
          <div className="px-6 py-16 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-medium text-text-primary mb-1">
                Stay in the loop
              </h3>
              <p className="text-text-secondary">
                Follow us on Instagram for event announcements and dates.
              </p>
            </div>
            <a
              href="https://www.instagram.com/neudisrupt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition flex-shrink-0"
            >
              Follow on Instagram
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
