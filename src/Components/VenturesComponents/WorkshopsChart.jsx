import React from "react";
import { NavLink } from "react-router-dom";
import PastVenturesGallery from "../PastVenturesComponents/PastVentureCard";
import FadeIn from "../shared/FadeIn";

const phases = [
  {
    num: "01",
    title: "Explore",
    weeks: "Weeks 1–2",
    desc: "Intro to fintech fundamentals and team formation. Brainstorm problems worth solving.",
  },
  {
    num: "02",
    title: "Validate",
    weeks: "Weeks 3–4",
    desc: "Test your idea against real users. Build a business model and size your market.",
  },
  {
    num: "03",
    title: "Build",
    weeks: "Weeks 5–6",
    desc: "Prototype in Figma, develop a go-to-market plan, and start thinking about positioning.",
  },
  {
    num: "04",
    title: "Pitch",
    weeks: "Weeks 7–8",
    desc: "Refine your story, rehearse with past winners, and present to a panel of judges on pitch day.",
  },
];

const branches = [
  { name: "Consulting", desc: "Semester-long client engagements.", to: "/consulting" },
  { name: "Quant", desc: "Build and backtest trading strategies.", to: "/quant" },
  { name: "Research", desc: "Publish original fintech analysis.", to: "/research" },
];

export default function WorkshopsChart() {
  return (
    <>
      {/* How It Works — Phase Timeline */}
      <section className="bg-white">
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
              How It Works
            </h2>
            <p className="text-base text-text-muted mb-14">
              From blank page to polished pitch in four phases.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gray-200" />
            {phases.map((phase, i) => (
              <FadeIn key={phase.num} delay={i * 150}>
                <div className="text-center relative mb-8 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-surface-primary text-white flex items-center justify-center mx-auto text-sm font-medium mb-5 relative z-10">
                    {phase.num}
                  </div>
                  <h3 className="text-lg font-medium text-text-primary mb-1">{phase.title}</h3>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-3">{phase.weeks}</p>
                  <p className="text-sm text-text-secondary max-w-[220px] mx-auto">{phase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Day & Prizes */}
      <section>
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
              Pitch Day
            </h2>
            <p className="text-base text-text-muted mb-10">
              It all leads here. Teams present to a panel of real fintech angel investors and the top three walk away with real money.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-5xl md:text-6xl font-display font-medium text-text-primary mb-8">$2,250</p>
            <div className="flex gap-10">
              <div>
                <p className="text-2xl font-display font-medium text-text-primary">$1,000</p>
                <p className="text-sm text-text-muted mt-1">1st Place</p>
              </div>
              <div>
                <p className="text-2xl font-display font-medium text-text-primary">$750</p>
                <p className="text-sm text-text-muted mt-1">2nd Place</p>
              </div>
              <div>
                <p className="text-2xl font-display font-medium text-text-primary">$500</p>
                <p className="text-sm text-text-muted mt-1">3rd Place</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Past Winners */}
      <section className="bg-white">
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
              Past Winners
            </h2>
            <p className="text-base text-text-muted mb-10">
              What past cohorts built.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <PastVenturesGallery />
          </FadeIn>
        </div>
      </section>

      {/* What Comes Next — Branch Cards */}
      <section>
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
              What Comes Next
            </h2>
            <p className="text-base text-text-muted mb-10">
              Most of our branch members started here. After the program, you have a clear path forward.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {branches.map((b, i) => (
              <FadeIn key={b.name} delay={i * 100}>
                <NavLink
                  to={b.to}
                  className="block border border-gray-200 rounded-card p-6 group hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-display font-medium text-text-primary mb-2 group-hover:underline">
                    {b.name} <svg className="inline-block w-4 h-4 ml-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                  </h3>
                  <p className="text-sm text-text-secondary">{b.desc}</p>
                </NavLink>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-white">
        <FadeIn>
          <div className="px-6 py-16 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-medium text-text-primary mb-1">
                Apply to Finnovate
              </h3>
              <p className="text-text-secondary">
                No fintech background needed. Just curiosity.
              </p>
            </div>
            <a
              href="#"
              className="px-8 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition flex-shrink-0"
            >
              Apply
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
