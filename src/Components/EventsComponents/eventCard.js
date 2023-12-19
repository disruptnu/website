import React from "react";

export default function eventCard(props) {
  return (
    <div className="px-5 flex flex-col items-center min-w-max min-h-max">
      <div className="bg-neutral-800 pt-24">
        <div className="pb-16 place-items-center">
          <h1 className="text-white text-7xl font-bold text-center pb-2"
              style={{fontFamily: 'Usual-Light'}}>
                {props.day}
          </h1>
          <h3 className="text-white text-4xl font-bold text-center pb-16"
              style={{fontFamily: 'Usual-Light'}}>
            {props.month}
          </h3>
          <h3 className="text-white text-4xl font-bold text-center"
              style={{fontFamily: 'Usual-Regular'}}>
            {props.header}
          </h3>
        </div>
        <img
          className="rounded-sm pt-4 pb-2 w-64"
          src={props.image}
          alt={props.alt}
        />
      </div>
    </div>
  );
}
