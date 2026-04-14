import React from "react";

export default function EventsLanding() {
  return (
    <section className="px-2 pt-2 pb-8 bg-white">
      <div className="w-[99%] max-w-[1800px] mx-auto bg-surface-primary rounded-hero">
        <div className="px-6 pt-32 md:pt-40 pb-16 md:pb-20 max-w-5xl mx-auto">
          <p className="text-lg text-gray-400 mb-2">Disrupt</p>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
            Events
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Hackathons, workshops, and the Disrupt Expo. Open to all Northeastern
            undergrads, most with no signup required.
          </p>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">48hrs</p>
              <p className="text-sm text-gray-400 mt-1">Finhacks hackathon</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">Monthly</p>
              <p className="text-sm text-gray-400 mt-1">Hackathons & workshops</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display font-medium text-white">Open</p>
              <p className="text-sm text-gray-400 mt-1">To all NEU undergrads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
