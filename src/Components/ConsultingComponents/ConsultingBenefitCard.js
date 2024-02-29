import React from "react";

export default function ConsultingBenefitCard(props) {
  return (
    <div className="items-center pt-16 w-2/5px-5 flex-center min-h-max">
      <div className="flex flex-col h-full pt-16 bg-black border">
        <div className="flex flex-col justify-between pl-8 mb-12 pr-auto">
          <div>
            <p
              className="w-3/5 text-4xl font-black leading-10 text-left text-white"
              style={{ fontFamily: "Usual-Regular" }}
            >
              {props.header}
            </p>
          </div>
          <img
            className="self-center w-64 pt-12"
            src={props.img}
            alt={props.alt}
          />

          <p
            className="pt-8 pr-8 text-lg text-left text-white font-regular"
            style={{ fontFamily: "Usual-Regular" }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
