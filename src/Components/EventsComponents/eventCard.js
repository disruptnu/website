import React from "react";

export default function eventCard(props) {
  return (
    <div className="px-5 flex flex-col items-center min-w-max min-h-max">
      <div className="bg-neutral-800 pt-24">
        <div className="pb-8 place-items-center">
          <h1
            className="text-white text-7xl font-bold text-center pb-2"
            style={{ fontFamily: "Usual-Light" }}
          >
            {props.day}
          </h1>
          <h3
            className="text-white text-4xl font-bold text-center pb-8"
            style={{ fontFamily: "Usual-Light" }}
          >
            {props.month}
          </h3>
          <h3
            className="text-white text-4xl font-bold text-center pl-4 pr-4"
            style={{ fontFamily: "Usual-Regular" }}
          >
            {props.header}
          </h3>
          <div className="flex justify-center items-center m-1">
            <i class="fa-solid fa-money-bill-trend-up mt-1 text-8xl pt-4"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
