import React from "react";
import PillarSection from "../FundamentalsComponents/ThreePillars/pillarSection";
import { Pillar } from "./ThreePillars/fundamentalsConstants"; // Adjust the import path as necessary

export default function ThreePillars() {
  return (
    <div className="max-w-full overflow-hidden">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        {Pillar.map((pillar) => (
          <PillarSection
            key={pillar.key}
            numberIcon={pillar.numberIcon}
            header={pillar.header}
            description={pillar.description}
            alt={pillar.alt}
          />
        ))}
      </div>
    </div>
  );
}
