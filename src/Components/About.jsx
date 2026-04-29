import React from "react";
import WhyDisrupt from "./AboutComponents/WhyDisrupt";
import LeadershipSection from "./AboutComponents/LeadershipSection";
import FadeIn from "./shared/FadeIn";

export default function About() {
  return (
    <>
      <WhyDisrupt />
      <LeadershipSection />

      {/* Contact */}
      <section className="bg-white">
        <div className="px-6 py-16 max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-text-muted uppercase tracking-wide mb-8">Contact</p>
            <div className="space-y-2">
              <a
                href="mailto:nufintech@gmail.com"
                className="block text-lg text-text-primary hover:underline"
              >
                nufintech@gmail.com
              </a>
              <a
                href="https://www.instagram.com/neudisrupt"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-text-primary hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/neudisrupt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-text-primary hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
