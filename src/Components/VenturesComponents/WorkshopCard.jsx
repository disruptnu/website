import React from "react";

export default function WorkshopCard(props) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 mb-4">
      <p className="text-lg font-bold text-white mb-1">{props.date}</p>
      <h3 className="text-xl font-bold text-white mb-1">
        {props.header || `Workshop ${props.workshopNum}`}
      </h3>
      <p className="text-sm text-gray-400 mb-2">
        {props.startTime} - {props.endTime}
      </p>
      {props.topic1 && <p className="text-gray-300 text-sm">{props.topic1}</p>}
      {props.topic2 && <p className="text-gray-300 text-sm">{props.topic2}</p>}
    </div>
  );
}
