import React, { useRef } from "react";
import FadeIn from "../shared/FadeIn";

const clients = [
  { name: "Enigma Technologies", detail: "$400M valuation, Series C", url: "https://www.enigma.com/" },
  { name: "JMAN Group", detail: "$140M valuation", url: "https://jmangroup.com/" },
  { name: "Fishtail", detail: "$35M valuation", url: "https://fishtail.ai/" },
  { name: "SigIQ", detail: "$10M seed round", url: "https://www.sigiq.ai/" },
];

const pastWork = [
  {
    period: "Fall 2024",
    title: "Blockchain & AI Integration",
    summary:
      "Compliance analysis, secure tokenization for asset transactions, an AI-powered due diligence proposal, and referral-based marketing strategies.",
  },
  {
    period: "Fall 2024",
    title: "Front-End Development & UX",
    summary:
      "User research, behavioral analysis, strategic design improvements, and customer acquisition pipelines via digital marketing.",
  },
  {
    period: "Spring 2023",
    title: "Digital Insurance Sales Optimization",
    summary:
      "Product discovery research among college-age consumers, campus-focused marketing strategy, and cost-effective acquisition channels.",
  },
  {
    period: "Spring 2023",
    title: "Investor Engagement CRM",
    summary:
      "Custom CRM for centralized investor communication with real-time deal tracking and improved engagement visibility.",
  },
];

const steps = [
  {
    title: "Weekly Syncs",
    desc: "Regular check-ins with the client to stay aligned on what matters.",
  },
  {
    title: "Mid-Semester Review",
    desc: "A deeper look at progress and direction halfway through the engagement.",
  },
  {
    title: "Final Deliverables",
    desc: "Strategic recommendations, working prototypes, or both.",
  },
];

export default function WhyWorkWithUs() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <>
      {/* Client Trust Bar */}
      <section className="bg-white">
        <div className="px-6 py-12 max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-sm text-text-muted uppercase tracking-wide mb-6">Notable Clients</p>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {clients.map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="group">
                  <p className="text-lg font-medium text-text-primary group-hover:underline">{c.name}</p>
                  <p className="text-sm text-text-muted">{c.detail}</p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Two Tracks */}
      <section>
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
              Two Tracks
            </h2>
            <p className="text-base text-text-muted mb-10">
              Every engagement pairs both. Same client, different angles.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FadeIn delay={0}>
              <div className="bg-surface-primary rounded-hero p-8 md:p-10">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Strategy</p>
                <h3 className="text-2xl font-display font-medium text-white mb-5">Consultants</h3>
                <ul className="space-y-2.5 text-gray-300 text-[15px]">
                  <li>Go-to-market strategy</li>
                  <li>Market research and sizing</li>
                  <li>Competitive analysis</li>
                  <li>Strategic recommendations and pitch decks</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="bg-surface-primary rounded-hero p-8 md:p-10">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Development</p>
                <h3 className="text-2xl font-display font-medium text-white mb-5">Developers</h3>
                <ul className="space-y-2.5 text-gray-300 text-[15px]">
                  <li>Software prototypes and MVPs</li>
                  <li>API development and integration</li>
                  <li>Full-stack proof of concepts</li>
                  <li>Bug identification and technical audits</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works — Horizontal Stepper */}
      <section className="bg-white">
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
              How It Works
            </h2>
            <p className="text-base text-text-muted mb-14">
              One semester, three checkpoints.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative">
            <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-px bg-gray-200" />
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="text-center relative">
                  <div className="w-12 h-12 rounded-full bg-surface-primary text-white flex items-center justify-center mx-auto text-sm font-medium mb-5 relative z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary max-w-xs mx-auto">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past Work — Carousel */}
      <section>
        <div className="py-20 max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between px-6 mb-8">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
                  Past Work
                </h2>
                <p className="text-base text-text-muted">
                  What we've delivered for real clients.
                </p>
              </div>
              <div className="hidden sm:flex gap-2">
                <button
                  onClick={() => scroll(-1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
                  aria-label="Scroll left"
                >
                  &larr;
                </button>
                <button
                  onClick={() => scroll(1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
                  aria-label="Scroll right"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {pastWork.map((item) => (
                <div
                  key={item.title}
                  className="flex-shrink-0 w-[280px] sm:w-[360px] bg-white border border-gray-200 rounded-card p-6 snap-start"
                >
                  <p className="text-sm text-text-muted uppercase tracking-wide font-medium mb-3">
                    {item.period}
                  </p>
                  <h3 className="text-xl font-medium text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-white">
        <FadeIn>
          <div className="px-6 py-16 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-medium text-text-primary mb-1">
                Apply to Consulting
              </h3>
              <p className="text-text-secondary">
                Applications open at the start of each semester.
              </p>
            </div>
            <a
              href="/apply"
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
