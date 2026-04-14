import React from "react";

export default function WorkshopCard(props) {
  return (
    <div className="border border-gray-200 rounded-card p-6 mb-4">
      <p className="text-lg font-bold text-text-primary mb-1">{props.date}</p>
      <h3 className="text-xl font-bold text-text-primary mb-1">
        {props.header || `Workshop ${props.workshopNum}`}
      </h3>
      <p className="text-sm text-text-muted mb-2">
        {props.startTime} - {props.endTime}
      </p>
      {props.topic1 && <p className="text-text-secondary text-sm">{props.topic1}</p>}
      {props.topic2 && <p className="text-text-secondary text-sm">{props.topic2}</p>}
    </div>
  );
}
