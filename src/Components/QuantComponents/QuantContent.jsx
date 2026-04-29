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
          <div className="px-6 py-16 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-medium text-text-primary mb-1">
                Apply to Quant
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
