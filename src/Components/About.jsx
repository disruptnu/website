import React from "react";
import WhyDisrupt from "./AboutComponents/WhyDisrupt";
import FundamentalsDescription from "./AboutComponents/FundamentalsComponents/FundamentalsDescription";
import ThreePillars from "./AboutComponents/FundamentalsComponents/ThreePillars";
import TeamShowcase from "./AboutComponents/TeamShowcase";
import TeamCarousel from "./AboutComponents/TeamShowcaseComponents/TeamCarousel";

export default function About() {
  return (
    <>
      <WhyDisrupt />
      <FundamentalsDescription />
      <ThreePillars />
      <TeamCarousel />
      <TeamShowcase />
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-3xl md:text-5xl font-faucet text-white">
          Let's build a fintech community <span className="text-brand-lime">together</span>
        </p>
      </section>
    </>
  );
}
