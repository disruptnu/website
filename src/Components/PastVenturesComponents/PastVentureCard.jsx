import React, { useState } from "react";
import { CARD } from "./PastVenturesConstants";

export default function PastVenturesGallery() {
  const [openYear, setOpenYear] = useState(null);
  const toggleYear = (year) => setOpenYear(openYear === year ? null : year);
  const uniqueYears = [...new Set(CARD.map((card) => card.year))];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {uniqueYears.map((year, index) => {
        const projects = CARD.filter((card) => card.year === year);
        return (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleYear(year)}
              className="w-full flex justify-between items-center border border-gray-800 rounded-lg px-6 py-4 text-white text-left hover:bg-gray-900"
            >
              <div>
                <span className="text-xl font-bold">{year}</span>
                <p className="text-sm text-gray-400 mt-1">
                  {projects.map((p) => p.header).join(" / ")}
                </p>
              </div>
              <span>{openYear === year ? "\u25B2" : "\u25BC"}</span>
            </button>

            {openYear === year && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4">
                {projects.map((card) => (
                  <div key={card.key} className="border border-gray-800 rounded-lg p-4 text-white">
                    <div className="w-full h-48 overflow-hidden rounded mb-3 bg-gray-900">
                      <iframe
                        src={
                          card.type === "figma" ? card.figmaEmbedLink
                            : card.type === "googleSlides" ? card.googleSlidesEmbedLink
                            : card.type === "canva" ? card.canvaEmbedLink
                            : card.pdfEmbedLink
                        }
                        className="w-full h-full border-none"
                        allowFullScreen
                        title={card.header}
                      />
                    </div>
                    <h3 className="font-bold mb-1">{card.header}</h3>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
