import React from "react";
import { TeamMember } from "./TeamShowcaseComponents/TeamConstants";
import MemberLine from "./TeamShowcaseComponents/MemberLine";

export default function TeamShowcase() {
  return (
    <div className="mx-auto mb-20 ml-10 mt-28 max-w-7xl">
      <p className="mb-4 text-3xl font-bold text-white">
        MEET THE TEAM
      </p>
      {/* Adding Headers */}
      <div className="justify-between hidden px-4 py-2 text-white md:flex">
        <h3 className="text-lg font-bold">Name</h3>
        <h3 className="text-lg font-bold">Title</h3>
        <h3 className="text-lg font-bold">Team</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {TeamMember.map((member) => (
          <MemberLine
            key={member.key}
            headshot={member.headshot}
            name={member.name}
            position={member.position}
            team={member.team}
            linkedin={member.linkedin}
            alt={member.alt}
          />
        ))}
      </div>
    </div>
  );
}
