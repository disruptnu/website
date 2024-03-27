import React from "react";

export default function PillarSection(props) {
  return (
    <div className="flex flex-col items-start p-4 text-white bg-black sm:p-6 md:p-10">
      <img
        className="w-6 h-6 mb-4"
        src={props.numberIcon}
        alt={props.alt}
      />
      <h1
        className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
        style={{
          fontFamily: "Faucet",
          fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on",
        }}
      >
        {props.header}
      </h1>
      <p
        className="w-full mt-2 text-sm sm:text-md md:text-lg lg:text-xl"
        style={{ fontFamily: "Usual-Regular" }}
      >
        {props.description}
      </p>
    </div>
  );
}
