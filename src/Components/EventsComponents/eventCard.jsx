import React from "react";

export default function EventCard({ image, header, alt, day, month }) {
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <img className="w-full h-40 object-cover" src={image} alt={alt} />
      <div className="p-4">
        <h3 className="font-bold text-white mb-1">{header}</h3>
        <p className="text-sm text-gray-400">{month} {day}</p>
      </div>
    </div>
  );
}
