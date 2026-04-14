import React from "react";

export default function TeamShowcaseCard(props) {
  return (
    <div className="flex flex-col items-center px-4 sm:px-10">
      <img
        className="w-full max-w-xs pb-2 rounded-sm sm:max-w-sm md:max-w-md lg:max-w-lg"
        src={props.image}
        alt={props.alt}
      />
      {/* Assuming you want to add name and title below the image */}
      <div className="mt-2 text-center">
        <p className="text-sm font-bold sm:text-md md:text-lg">{props.name}</p>
        <p className="text-xs sm:text-sm md:text-md">{props.title}</p>
      </div>
    </div>
  );
}
