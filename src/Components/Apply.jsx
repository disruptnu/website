import React from "react";
import { NavLink } from "react-router-dom";

const teams = [
  {
    name: "Consulting",
    description: "Semester-long engagements with funded startups.",
    link: "/consulting",
    bg: "bg-[#1a1a2e]",
  },
  {
    name: "Quant",
    description: "Building and backtesting trading strategies on real market data.",
    link: "/quant",
    bg: "bg-[#1a2e1a]",
  },
  {
    name: "Research",
    description: "Weekly fintech analysis, published on Medium.",
    link: "/research",
    bg: "bg-[#2e1a1a]",
  },
  {
    name: "Finnovate",
    description: "8-week venture accelerator. Build a startup, pitch for funding.",
    link: "/finnovate",
    bg: "bg-[#1a2e2e]",
  },
  {
    name: "Operations",
    description: "Marketing, events, and the engine behind everything Disrupt does.",
    link: null,
    bg: "bg-[#2e2e1a]",
  },
];

export default function Apply() {
  return (
    <section className="min-h-screen bg-white">
      <div className="px-6 pt-36 pb-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
          Apply
        </h1>
        <p className="text-base text-text-muted mb-12">
          Pick a team to get started. Applications open at the start of each semester.
        </p>

        <div className="grid gap-4">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`${team.bg} rounded-hero p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}
            >
              <div>
                <h2 className="text-xl md:text-2xl font-display font-medium text-white mb-1">
                  {team.name}
                </h2>
                <p className="text-white/60 text-sm md:text-base">
                  {team.description}
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                {team.link && (
                  <NavLink
                    to={team.link}
                    className="px-5 py-2 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition"
                  >
                    Learn more
                  </NavLink>
                )}
                <a
                  href="#"
                  className="px-5 py-2 bg-brand-lime text-surface-primary text-sm font-medium rounded-full hover:brightness-110 transition"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
