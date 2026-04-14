import React from "react";
import FadeIn from "../shared/FadeIn";

export default function QuantContent() {
  return (
    <>
      {/* Notable Projects */}
      <section className="bg-white">
        <div className="px-6 py-16 max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-text-muted uppercase tracking-wide mb-8">Projects</p>
            <p className="text-lg text-text-secondary">
              Details on current projects and past strategies coming soon.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tools & Skills */}
      <section>
        <div className="px-6 py-16 max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-text-muted uppercase tracking-wide mb-8">Tools & Skills</p>
            <p className="text-lg text-text-secondary">
              Details on tools, languages, and frameworks coming soon.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-white">
        <FadeIn>
          <div className="px-6 py-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-medium text-text-primary mb-4">Apply to Quant</h2>
            <p className="text-text-secondary mb-6">
              We open applications at the start of each semester. Come ready to
              learn, build, and get your hands dirty with real data.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition"
            >
              Apply
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
