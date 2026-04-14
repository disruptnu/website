import React from "react";

export default function ResearchHero() {
  return (
    <section className="px-2 pb-8 bg-white">
      <div className="w-[99%] max-w-[1800px] mx-auto bg-surface-primary rounded-b-hero">
        <div className="px-6 pt-32 md:pt-40 pb-16 md:pb-20 max-w-5xl mx-auto">
          <p className="text-lg text-gray-400 mb-2">Disrupt</p>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
            Research
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Original fintech analysis, published weekly on Medium. Our analysts
            cover the trends shaping the industry and turn them into clear,
            well-argued writing.
          </p>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">
                40+
              </p>
              <p className="text-sm text-gray-400 mt-1">Articles published</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">
                2020
              </p>
              <p className="text-sm text-gray-400 mt-1">Year established</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">
                Weekly
              </p>
              <p className="text-sm text-gray-400 mt-1">Publication cadence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
