import React from "react";

export default function ConsultingOpeningScreen() {
  return (
    <section className="px-2 pt-2 laptop:pt-0 pb-8 bg-white">
      <div className="w-[99%] max-w-[1800px] mx-auto bg-surface-primary rounded-hero laptop:rounded-t-none">
        <div className="px-6 pt-32 md:pt-40 pb-16 md:pb-20 max-w-5xl mx-auto">
          <p className="text-lg text-gray-400 mb-2">Disrupt</p>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
            Consulting
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            We partner with funded startups and established firms on semester-long
            engagements. Two tracks work on every client: strategy and dev, solving
            the same problem from different angles.
          </p>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">$585M+</p>
              <p className="text-sm text-gray-400 mt-1">Combined client valuation</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">14+</p>
              <p className="text-sm text-gray-400 mt-1">Successful engagements</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">1,750+</p>
              <p className="text-sm text-gray-400 mt-1">Student consulting hours</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">90%+</p>
              <p className="text-sm text-gray-400 mt-1">Implementation rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
