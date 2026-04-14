import React from "react";

export default function EventCard({ image, header, alt, day, month }) {
  return (
    <div className="border border-gray-200 rounded-card overflow-hidden">
      <img className="w-full h-40 object-cover" src={image} alt={alt} loading="lazy" />
      <div className="p-4">
        <h3 className="font-bold text-text-primary mb-1">{header}</h3>
        <p className="text-sm text-text-muted">{month} {day}</p>
      </div>
    </div>
  );
}
