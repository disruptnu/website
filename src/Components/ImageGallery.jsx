import React, { useState } from "react";

// Vite glob imports — eagerly import all images
const rootImages = import.meta.glob("../img/*.{svg,png,PNG,jpg,jpeg,webp,gif}", { eager: true, import: "default" });
const eboardF25 = import.meta.glob("../img/eboard_photos_F25/*.{svg,png,PNG,jpg,jpeg,webp,gif}", { eager: true, import: "default" });
const eboardOld = import.meta.glob("../img/eboard_photos/*.{svg,png,PNG,jpg,jpeg,webp,gif}", { eager: true, import: "default" });

function extractName(path) {
  return path.split("/").pop();
}

function buildSection(label, globResult) {
  return Object.entries(globResult).map(([path, src], i) => ({
    src,
    name: extractName(path),
    section: label,
  }));
}

const ALL_IMAGES = [
  ...buildSection("General (src/img/)", rootImages),
  ...buildSection("E-Board F25 (src/img/eboard_photos_F25/)", eboardF25),
  ...buildSection("E-Board Archive (src/img/eboard_photos/)", eboardOld),
];

const SECTIONS = [...new Set(ALL_IMAGES.map((img) => img.section))];

export default function ImageGallery() {
  const [activeSection, setActiveSection] = useState(null);

  const displayed = activeSection
    ? ALL_IMAGES.filter((img) => img.section === activeSection)
    : ALL_IMAGES;

  let globalIndex = 0;

  return (
    <div className="px-6 pt-28 pb-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-display font-medium text-text-primary mb-2">Image Assets</h1>
      <p className="text-text-muted mb-8">{ALL_IMAGES.length} total images</p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveSection(null)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition ${
            activeSection === null ? "bg-brand-lime text-surface-primary" : "bg-gray-100 text-text-secondary hover:bg-gray-200"
          }`}
        >
          All ({ALL_IMAGES.length})
        </button>
        {SECTIONS.map((section) => {
          const count = ALL_IMAGES.filter((img) => img.section === section).length;
          return (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                activeSection === section ? "bg-brand-lime text-surface-primary" : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              {section.split("(")[0].trim()} ({count})
            </button>
          );
        })}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {displayed.map((img, i) => {
          globalIndex++;
          return (
            <div key={`${img.section}-${img.name}`} className="border border-gray-200 rounded-card p-3 flex flex-col">
              <div className="bg-gray-100 rounded flex items-center justify-center h-32 mb-2 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-text-muted text-xs font-bold mb-1">#{globalIndex}</p>
              <p className="text-xs text-text-muted break-all">{img.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
