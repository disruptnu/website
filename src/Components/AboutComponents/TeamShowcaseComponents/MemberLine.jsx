import React, { useState } from "react";

const MemberLine = ({ headshot, name, position, team, linkedin, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block cursor-pointer group hover:bg-gray-800"
    >
      <div className="flex items-center justify-between w-full p-4">
        <a href={linkedin} className="flex-1 text-lg font-bold text-white">{name}</a>
        <p className="flex-1 text-center text-white">{position}</p>
        <p className="flex-1 text-right text-white">{team}</p>
      </div>
      
      {isHovered && (
        <div className="flex justify-center w-full pt-2">
          <img src={headshot} alt={alt} className="object-cover w-24 h-24 rounded-full md:w-48 md:h-48 md:rounded-none" />
        </div>
      )}
    </div>
  );
};

export default MemberLine;
