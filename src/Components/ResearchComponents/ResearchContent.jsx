import React from "react";
import FadeIn from "../shared/FadeIn";

const topics = [
  "Digital Payments",
  "Blockchain",
  "AI in Finance",
  "Neobanking",
  "RegTech",
  "InsurTech",
  "Women in FinTech",
  "Crypto Markets",
  "Venture Capital",
  "Open Banking",
  "DeFi",
  "Embedded Finance",
  "Wealth Management",
  "Real Estate Tech",
  "Banking Infrastructure",
  "Algorithmic Trading",
  "Financial Inclusion",
  "Cybersecurity",
  "Tokenization",
  "IPO & Public Markets",
];

export default function ResearchContent() {
  return (
    <>
      {/* What We Cover */}
      <section>
        <div className="px-6 py-20 max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
              What We Cover
            </h2>
            <p className="text-base text-text-muted mb-10">
              Trends, technologies, and ideas shaping fintech.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-5 py-2.5 border border-gray-200 rounded-full text-sm text-text-secondary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <FadeIn>
          <div className="px-6 py-16 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-medium text-text-primary mb-1">
                Apply to Research
              </h3>
              <p className="text-text-secondary">
                Applications open at the start of each semester.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <a
                href="/apply"
                className="px-8 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition"
              >
                Apply
              </a>
              <a
                href="https://disrupt-fintech.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:underline text-sm font-medium"
              >
                Follow on Medium
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
