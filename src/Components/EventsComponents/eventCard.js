import React from "react";

const EventCard = ({ image, header, alt, day, month }) => {
  return (
    <div className="flex flex-col items-center max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="w-full" src={image} alt={alt} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{header}</div>
        <p className="text-base text-gray-700">
          <span className="font-bold">Date: </span>
          {month} {day}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
