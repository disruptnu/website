import React from "react";

export default function MemberCard({ member }) {
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-4 rounded"
    >
      <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
        <img
          src={member.headshot}
          alt={`${member.name} headshot`}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="mt-3 text-sm font-bold text-white text-center">{member.name}</h3>
      <p className="text-xs text-gray-400 text-center">{member.position}</p>
    </a>
  );
}
