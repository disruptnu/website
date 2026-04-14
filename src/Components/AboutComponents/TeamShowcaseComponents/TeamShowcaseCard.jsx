import React from "react";

export default function TeamShowcaseCard(props) {
  return (
    <div className="px-2">
      <img
        className="w-full rounded"
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
}
