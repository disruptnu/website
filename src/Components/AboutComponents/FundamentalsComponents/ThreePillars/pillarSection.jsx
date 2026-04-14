import React from "react";

export default function PillarSection(props) {
  return (
    <div className="p-6 text-white">
      <img className="w-6 h-6 mb-4" src={props.numberIcon} alt={props.alt} />
      <h3 className="text-xl md:text-2xl font-faucet mb-2">{props.header}</h3>
      <p className="text-gray-300">{props.description}</p>
    </div>
  );
}
