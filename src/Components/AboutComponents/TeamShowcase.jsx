import React, { useState } from "react";
import { TeamMember } from "./TeamShowcaseComponents/TeamConstants";
import MemberCard from "./TeamShowcaseComponents/MemberCard";

export default function TeamShowcase() {
  const teams = [...new Set(TeamMember.map((m) => m.team))];
  const [activeTeam, setActiveTeam] = useState(teams[0]);
  const filteredMembers = TeamMember.filter((m) => m.team === activeTeam);

  return (
    <section className="bg-white">
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-display font-medium text-text-primary text-center mb-8">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => setActiveTeam(team)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                activeTeam === team
                  ? "bg-brand-lime text-surface-primary"
                  : "bg-gray-100 text-text-secondary hover:bg-gray-200"
              }`}
            >
              {team}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMembers.map((member) => (
            <MemberCard key={member.key} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
