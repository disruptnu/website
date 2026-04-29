import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const teams = [
  {
    name: "Operations",
    description: "Marketing, events, and the engine behind everything Disrupt does.",
    link: null,
    bg: "bg-[#2e2e1a]",
    open: true,
  },
  {
    name: "Consulting",
    description: "Semester-long engagements with funded startups.",
    link: "/consulting",
    bg: "bg-[#1a1a2e]",
    open: false,
  },
  {
    name: "Quant",
    description: "Building and backtesting trading strategies on real market data.",
    link: "/quant",
    bg: "bg-[#1a2e1a]",
    open: false,
  },
  {
    name: "Research",
    description: "Weekly fintech analysis, published on Medium.",
    link: "/research",
    bg: "bg-[#2e1a1a]",
    open: false,
  },
  {
    name: "Finnovate",
    description: "8-week venture accelerator. Build a startup, pitch for funding.",
    link: "/finnovate",
    bg: "bg-[#1a2e2e]",
    open: false,
  },
];

const operationsRoles = [
  {
    title: "Event Coordinators",
    description:
      "Plan and execute Disrupt's events throughout the semester — from kickoff socials and monthly hackathons to the end-of-semester Fintech Expo. You handle logistics, venues, food, and everything that goes into making an event actually run.",
    link: "https://forms.gle/KEPYCMAF9TkoWhYE6",
  },
  {
    title: "Outreach Chairs",
    description:
      "Build and maintain Disrupt's network of speakers, partners, and collaborators. You're the ones reaching out to industry professionals, coordinating with other Northeastern clubs, and setting up the connections that bring outside perspective into the club.",
    link: "https://forms.gle/buPdZ88jezXfDuPZ6",
  },
  {
    title: "Graphic Designers",
    description:
      "Create the visual identity of Disrupt — social media graphics, event materials, and anything else the club puts in front of an audience. You keep our brand consistent and make sure everything we put out looks the part.",
    link: "https://forms.gle/hxjGrvrymFk7bw9r7",
  },
  {
    title: "Photographers & Videographers",
    description:
      "Capture Disrupt in action. You document our events, hackathons, and community moments, and produce the visual content that tells our story on social media and beyond.",
    link: "https://forms.gle/RFL9svcDyuqYGLPJ8",
  },
  {
    title: "Treasurer",
    description:
      "Manage Disrupt's finances and keep the club running. You handle budgets, track expenses, coordinate reimbursements, and work with branch directors to make sure funding gets allocated where it needs to go.",
    link: "https://forms.gle/Aq15uVvzoqz7hPG56",
  },
];

function OperationsModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-[#111] border border-white/10 rounded-hero w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/40 hover:text-white transition text-xl leading-none"
        >
          ✕
        </button>

        <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-1">
          Operations
        </h2>
        <p className="text-white/50 text-sm mb-8">
          Select a role to apply for.
        </p>

        <div className="flex flex-col gap-4">
          {operationsRoles.map((role) => (
            <div
              key={role.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-white font-medium text-base mb-1">
                  {role.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
              <a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2 bg-brand-lime text-surface-primary text-sm font-medium rounded-full hover:brightness-110 transition text-center"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Apply() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
                  {team.open ? (
                    <button
                      onClick={() => setShowModal(true)}
                      className="px-5 py-2 bg-brand-lime text-surface-primary text-sm font-medium rounded-full hover:brightness-110 transition"
                    >
                      Apply
                    </button>
                  ) : (
                    <span className="px-5 py-2 bg-white/10 text-white/30 text-sm font-medium rounded-full cursor-not-allowed">
                      Opens fall 2026
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && <OperationsModal onClose={() => setShowModal(false)} />}
    </>
  );
}
