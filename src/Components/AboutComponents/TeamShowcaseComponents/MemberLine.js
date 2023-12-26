import React from "react";

export default function MemberLine(props) {
  return (
    <div>
      <a href={props.linkedin}>
        <div className="text-white flex flex-row justify-between text-center items-center h-12 hover:scale-105 pl-16 pr-16">
          <p
            className="flex-1 flex justify-start font-bold"
            style={{ fontFamily: "Usual-Regular" }}
          >
            {props.name}
          </p>
          <p
            className="flex-1 justify-center items-center"
            style={{ fontFamily: "Usual-Regular" }}
          >
            {props.position}
          </p>
          <p
            className="flex-1 flex justify-end"
            style={{ fontFamily: "Usual-Regular" }}
          >
            {props.team}
          </p>
        </div>
      </a>
    </div>
  );
}
