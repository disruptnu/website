import React from "react";

export default function TeamShowcaseCard(props) {
  return (
    <div className="px-10 flex flex-col items-center min-w-max min-h-max">
      <img
        className="rounded-sm pb-2 w-auto"
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
}
