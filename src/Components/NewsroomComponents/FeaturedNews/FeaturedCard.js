import React from "react";
// CARD TITLE FONT FEATURE SETTINGS: 'ss03' on, 'ss02' on, 'ss01' on

export default function FeaturedCard(props) {
  return (
    <div className="px-10 flex flex-col items-center min-w-max min-h-max">
      <img
        className="rounded-sm pb-2 w-130"
        src={props.image}
        alt={props.alt}
      />
      <div className="flex justify-between w-130 mx-5">
        <h3
          className="text-white font-bold"
          style={{
            fontFamily: "Faucet",
            fontFeatureSettings: "'ss03' on, 'ss02' on, 'ss01' on",
          }}
        >
          {props.header}
        </h3>
        <p className="text-white text-sm font-bold border border-solid border-white rounded-md py-1 px-2 text-center">
          Tag
        </p>
      </div>
    </div>
  );
}
