import React from "react";

export default function PillarSection(props) {
  return (
    <div className="p-6">
      <img className="w-6 h-6 mb-4" src={props.numberIcon} alt={props.alt} />
      <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary mb-2">{props.header}</h3>
      <p className="text-text-secondary">{props.description}</p>
    </div>
  );
}
