import React from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "../shared/FadeIn";

const activities = [
  {
    name: "Events",
    description:
      "Speaker events, fireside chats, recruiter panels, and workshops. We bring in people who are actually building in fintech.",
    navLink: "/events",
  },
  {
    name: "Disrupt Expo",
    description:
      "End-of-semester showcase in Curry Ballroom. Every branch presents their work in a gallery walk format.",
    navLink: "/events",
  },
  {
    name: "Hackathons",
    description:
      "Monthly hackathons building up to Finhacks, our flagship 48-hour fintech hackathon.",
    navLink: "/events",
  },
  {
    name: "Socials",
    description:
      "Mixers, celebrations, and co-hosted events with other orgs on campus.",
    navLink: "/events",
  },
];

export default function WhatWeRun() {
  return (
    <section className="bg-white py-20">
      <div className="px-6 max-w-6xl mx-auto">
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
        {activities.map((activity, i) => (
            <NavLink
              key={activity.name}
              to={activity.navLink}
              className="flex gap-6 md:gap-10 py-8 border-t border-gray-100 last:border-b"
            >
              <span className="text-5xl md:text-6xl font-display font-medium text-gray-200 leading-none w-20 md:w-24 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-display font-medium text-text-primary mb-2">
                  {activity.name}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-lg mb-2">
                  {activity.description}
                </p>
                <span className="text-sm font-medium text-text-primary">
                  Learn more &rarr;
                </span>
              </div>
            </NavLink>
        ))}
      </div>
      </FadeIn>
      </div>
    </section>
  );
}
