import React from "react";

export default function QuantHero() {
  return (
    <section className="px-2 pb-8 bg-white">
      <div className="w-[99%] max-w-[1800px] mx-auto bg-surface-primary rounded-b-hero">
        <div className="px-6 pt-32 md:pt-40 pb-16 md:pb-20 max-w-5xl mx-auto">
          <p className="text-lg text-gray-400 mb-2">Disrupt</p>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
            Quant
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Where math, code, and markets come together. We build quantitative
            trading strategies from the ground up and test them against real
            market data.
          </p>
        </div>
      </div>
    </section>
  );
}
