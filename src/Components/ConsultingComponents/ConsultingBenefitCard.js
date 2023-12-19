import React from "react";

export default function ConsultingBenefitCard(props) {
  return (
    <div className="px-5 pt-16 w-2/5 min-h-max">
      <div className="bg-black border pt-16 h-full flex flex-col">
        <div className="pl-8 pr-auto mb-12 flex flex-col justify-between">
          <div>
            <p
              className="text-white text-4xl font-black text-left w-3/5 leading-10"
              style={{ fontFamily: "Usual-Regular" }}
            >
              {props.header}
            </p>
          </div>
          <img
            className="w-64 pt-12 self-center"
            src={props.img}
            alt={props.alt}
          />

          <p
            className="text-white text-lg font-regular text-left pt-8 pr-8"
            style={{ fontFamily: "Usual-Regular" }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
