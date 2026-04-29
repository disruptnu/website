import React, { useRef } from "react";
import { CARD } from "./PastVenturesConstants";

const uniqueYears = [...new Set(CARD.map((card) => card.year))];

function getDeckUrl(card) {
  if (card.type === "figma") return card.figmaDeckLink;
  if (card.type === "googleSlides") return card.googleSlidesFullLink || card.googleSlidesDeckLink;
  if (card.type === "canva") return card.canvaFullLink;
  return card.pdfFullLink || card.pdfDeckLink;
}

export default function PastVenturesGallery() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div>
      <div className="hidden sm:flex justify-end gap-2 mb-6">
        <button
          onClick={() => scroll(-1)}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
          aria-label="Scroll left"
        >
          &larr;
        </button>
        <button
          onClick={() => scroll(1)}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
          aria-label="Scroll right"
        >
          &rarr;
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {uniqueYears.map((year) => {
          const projects = CARD.filter((c) => c.year === year);
          return (
            <div
              key={year}
              className="flex-shrink-0 w-[280px] sm:w-[320px] border border-gray-200 rounded-card p-6 snap-start"
            >
              <p className="text-sm font-medium text-text-primary mb-5">{year}</p>
              <div className="space-y-4">
                {projects.map((card) => {
                  const place = card.header.match(/^(1st|2nd|3rd)/)?.[0];
                  const name = card.header.replace(/^(1st|2nd|3rd):\s*/, "");
                  const url = getDeckUrl(card);
                  return (
                    <div key={card.key} className="flex items-start gap-3">
                      <span className="text-xs text-text-muted font-medium mt-1 w-5 flex-shrink-0">{place}</span>
                      <div>
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[15px] font-medium text-text-primary hover:underline"
                          >
                            {name}
                          </a>
                        ) : (
                          <p className="text-[15px] font-medium text-text-primary">{name}</p>
                        )}
                        <p className="text-xs text-text-muted mt-0.5">{card.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
