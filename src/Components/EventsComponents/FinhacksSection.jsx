import React from "react";
import FadeIn from "../shared/FadeIn";

const events = [
  {
    label: "Flagship",
    title: "Finhacks",
    desc: "Our 48-hour fintech hackathon and the biggest event we run all year. Teams go from an idea to a working prototype over one weekend.",
  },
  {
    label: "Showcase",
    title: "Disrupt Expo",
    desc: "End-of-semester showcase in Curry Ballroom. Every branch presents what they've built.",
  },
  {
    label: "Recurring",
    title: "Monthly Hackathons",
    desc: "One per month throughout the semester, building up to Finhacks. Smaller, lower-stakes, and a great way to get comfortable.",
  },
  {
    label: "Community",
    title: "Socials",
    desc: "Kickoffs, mixers, end-of-semester celebrations, and co-hosted events with other orgs on campus.",
  },
];

export default function FinhacksSection() {
  return (
    <section className="bg-white">
      <div className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
            What We Run
          </h2>
          <p className="text-base text-text-muted mb-10">
            Hackathons, panels, showcases, and socials throughout the semester.
          </p>
        </FadeIn>

        <FadeIn>
        <div className="space-y-0">
          {events.map((event, i) => (
              <div key={event.title} className="flex gap-6 md:gap-10 py-8 border-t border-gray-100 last:border-b">
                <span className="text-5xl md:text-6xl font-display font-medium text-gray-200 leading-none w-20 md:w-24 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-display font-medium text-text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed max-w-lg">
                    {event.desc}
                  </p>
                </div>
              </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
