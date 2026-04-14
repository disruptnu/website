import React from "react";
import { CARD } from "./ConsultingConstants";
import ConsultingBenefitCard from "./ConsultingBenefitCard";

export default function WhyWorkWithUs() {
  return (
    <div className="text-white">
      {/* Benefits */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-800">
        <h2 className="text-4xl font-faucet text-center mb-4">Why Work With Us?</h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          Proven impact. Data-driven execution. Technical innovation. Cost-effective, student-powered consulting for fintech transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARD.map((card) => (
            <ConsultingBenefitCard
              key={card.key}
              header={card.header}
              img={card.img}
              alt={card.header}
              description={card.description}
            />
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-800">
        <h2 className="text-4xl font-faucet text-center mb-10">Our Approach</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Macroeconomic, Competitor, and Market Research",
            "Hypothesis Testing & Focus Groups",
            "Regulatory Analysis & Compliance Strategy",
            "Front-End Development & UX Optimization",
            "Strategic Pitches for Untapped Markets",
            "Product Development & Enhancement",
          ].map((item, index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center text-black font-bold">
                {index + 1}
              </span>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting Process */}
      <section className="px-6 py-16 max-w-3xl mx-auto border-b border-gray-800">
        <h2 className="text-4xl font-faucet text-center mb-10">Consulting Process</h2>
        <div className="space-y-4">
          {[
            { title: "Weekly Updates", desc: "To ensure alignment and transparency through every phase." },
            { title: "Mid-Semester Check-ins", desc: "Roughly 2 hours of feedback and reporting for strategy refinement." },
            { title: "Final Deliverables", desc: "Comprehensive, data-driven recommendations and execution roadmaps." },
          ].map((step, i) => (
            <div key={i} className="border border-gray-800 rounded-lg p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-bold mb-1">{step.title}</p>
                <p className="text-sm text-gray-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Impact */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-b border-gray-800">
        <h2 className="text-4xl font-faucet text-center mb-10">Client Impact</h2>
        <div className="space-y-6">
          {[
            { period: "Spring 2023", title: "Optimizing Digital Insurance Sales", points: ["Research on financial product discovery among young consumers", "Marketing strategy refinement for college campuses", "Cost-effective acquisition methods identified", "Product positioning aligned with student adoption"] },
            { period: "Spring 2023", title: "Enhancing Investor Engagement via CRM", points: ["Custom CRM built for centralized investor communication", "Real-time deal tracking features added", "Boosted investment engagement through better visibility"] },
            { period: "Fall 2024", title: "Blockchain & AI Integration", points: ["Compliance and legal analysis for fintech firms", "Exploration of secure tokenization for asset transactions", "AI-powered due diligence proposal", "Referral-based marketing strategies developed"] },
            { period: "Fall 2024", title: "Front-End Development & UX Optimization", points: ["User research and behavioral analysis", "Strategic design improvements for UX", "Customer acquisition via digital marketing campaigns"] },
          ].map((item, idx) => (
            <div key={idx} className="border border-gray-800 rounded-lg p-6">
              <p className="text-sm text-brand-lime uppercase tracking-wide font-bold">{item.period}</p>
              <h3 className="text-2xl font-bold mt-1 mb-3">{item.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center border-t border-gray-800">
        <h2 className="text-4xl font-faucet mb-6">
          Join Us in Shaping <span className="text-brand-blue">Fintech's</span> Future
        </h2>
        <p className="text-gray-300 mb-6">
          We are committed to helping fintech companies refine their strategies, enhance user experiences, and navigate complex regulatory environments.
        </p>
        <p>
          Contact us at{" "}
          <a href="mailto:elevatedisruptneu@gmail.com" className="text-brand-lime hover:underline">
            elevatedisruptneu@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
