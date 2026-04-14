import React from "react";
import CaseImage3 from "../../img/CaseImage3.webp";
import finnovate1 from "../../img/finnovate1.webp";
import FinhackImg2 from "../../img/FinhackImg2.webp";
import homeVenturesProgram from "../../img/homeVenturesProgram.webp";
import techWorkshop2 from "../../img/tech-workshop2.webp";
import CaseImage1 from "../../img/CaseImage1.webp";
import homeEventsProgram from "../../img/homeEventsProgram.webp";
import FinhackImg1 from "../../img/FinhackImg1.webp";
import finnovate3 from "../../img/finnovate3.webp";
import homeConsultingProgram from "../../img/homeConsultingProgram.webp";


const row1 = [
  { width: "w-56", src: CaseImage3 },
  { width: "w-64", src: finnovate1 },
  { width: "w-48", src: FinhackImg2 },
  { width: "w-72", src: homeVenturesProgram },
  { width: "w-60", src: techWorkshop2 },
];

const row2 = [
  { width: "w-60", src: CaseImage1 },
  { width: "w-64", src: homeEventsProgram },
  { width: "w-72", src: FinhackImg1 },
  { width: "w-48", src: finnovate3 },
  { width: "w-56", src: homeConsultingProgram },

];

function ImageStrip({ items }) {
  return (
    <>
      {items.map((p, i) => (
        <div
          key={i}
          className={`flex-shrink-0 ${p.width} h-28 rounded-image overflow-hidden`}
        >
          <img
            src={p.src}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      ))}
    </>
  );
}

export default function OpeningScreen() {
  return (
    <section className="min-h-screen px-2 pb-8 bg-white">
      <div className="w-[99%] max-w-[1800px] mx-auto bg-surface-primary rounded-b-hero flex flex-col overflow-hidden">
        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 md:pt-40 pb-16 md:pb-24">
          <h1 className="hero-animate hero-animate-delay-1 text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
            Where Fintech Gets Built.
          </h1>
          <p className="hero-animate hero-animate-delay-2 text-lg text-gray-300 mb-8 max-w-2xl">
            Since 2019, Disrupt has been the home for Northeastern undergrads who
            want to do more than study fintech. Our members consult for funded
            startups, build quantitative strategies, publish original research, and
            launch ventures.
          </p>
          <div className="hero-animate hero-animate-delay-3 flex items-center gap-3">
            <a
              href="#"
              className="px-8 py-3 bg-brand-lime text-surface-primary font-medium rounded-full text-sm hover:brightness-110 transition"
            >
              Apply
            </a>
            <a
              href="/about"
              className="px-8 py-3 border border-white/30 text-white font-medium rounded-full text-sm hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Two-row scrolling image carousel */}
        <div className="overflow-hidden pb-5 px-6 space-y-2 group">
          {/* Row 1 — scrolls left */}
          <div className="flex will-change-transform animate-scroll-left group-hover-pause">
            <div className="flex gap-3 shrink-0 pr-3">
              <ImageStrip items={row1} />
            </div>
            <div className="flex gap-3 shrink-0 pr-3">
              <ImageStrip items={row1} />
            </div>
          </div>
          {/* Row 2 — scrolls right */}
          <div className="flex will-change-transform scroll-right group-hover-pause">
            <div className="flex gap-3 shrink-0 pr-3">
              <ImageStrip items={row2} />
            </div>
            <div className="flex gap-3 shrink-0 pr-3">
              <ImageStrip items={row2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
