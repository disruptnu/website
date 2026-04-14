import React from "react";

export default function VenturesOpeningScreen() {
  return (
    <section className="px-2 pt-2 pb-8 bg-white">
      <div className="w-[99%] max-w-[1800px] mx-auto bg-surface-primary rounded-hero">
        <div className="px-6 pt-32 md:pt-40 pb-16 md:pb-20 max-w-5xl mx-auto">
          <p className="text-lg text-gray-400 mb-2">Disrupt</p>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
            Finnovate
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            An 8-week venture accelerator for undergrads who are curious about
            fintech but don't know where to start. Form a team, build a startup,
            and pitch it for cash prizes.
          </p>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">
                27+
              </p>
              <p className="text-sm text-gray-400 mt-1">Winning teams</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">
                $2,250+
              </p>
              <p className="text-sm text-gray-400 mt-1">Prize pool</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">
                8 Weeks
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Blank page to pitch day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
