import React from "react";

export default function MemberLine(props) {
  return (
    <div>
      <a href={props.linkedin}>
        <div className="text-white flex flex-row justify-around text-center items-center h-12 hover:scale-105">
          <p className="font-bold" style={{ fontFamily: "Usual-Regular" }}>
            {props.name}
          </p>
          <p style={{ fontFamily: "Usual-Regular" }}>{props.position}</p>
          <p style={{ fontFamily: "Usual-Regular" }}>{props.team}</p>
        </div>
      </a>
    </div>
  );
}
