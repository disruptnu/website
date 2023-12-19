import React, { useState } from "react";
import { TeamMember } from "./TeamShowcaseComponents/TeamConstants";
import MemberLine from "./TeamShowcaseComponents/MemberLine";

export default function TeamShowcase() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMouseEnter = (memberKey) => {
    setHoveredMember(memberKey);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  return (
    <div className="min-w-max min-h-max mt-28 mb-20 ml-10">
      <p
        className="text-white text-3xl font-bold w-1/4"
        style={{
          fontFamily: "Faucet",
          fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on",
        }}
      >
        MEET THE TEAM
      </p>
      <div className="flex flex-row">
        <div className="fixed-container ml-10 mr-14 mt-10 w-48">
          {hoveredMember && (
            <img
              className="h-48"
              src={
                TeamMember.find((member) => member.key === hoveredMember)
                  .headshot
              }
              alt=""
            />
          )}
        </div>
        <div className="divide-y divide-gray-500 divide-solid w-3/4">
          {TeamMember.map((member) => (
            <div
              key={member.key}
              onMouseEnter={() => handleMouseEnter(member.key)}
              onMouseLeave={handleMouseLeave}
            >
              <MemberLine
                headshot={member.headshot}
                name={member.name}
                position={member.position}
                team={member.team}
                linkedin={member.linkedin}
                alt={member.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
