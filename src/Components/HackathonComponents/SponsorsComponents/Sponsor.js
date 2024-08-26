import React from "react";
import Marquee from "react-marquee-slider";
import sponsorA from './sponsorA.png';
import sponsorB from './sponsorB.png';
import sponsorC from './sponsorC.png';
import sponsorD from './sponsorD.png';

const sponsors = [
  { name: "Sponsor A", logo: sponsorA, url: "https://sponsor-a.com" },
  { name: "Sponsor B", logo: sponsorB, url: "https://sponsor-b.com" },
  { name: "Sponsor C", logo: sponsorC, url: "https://sponsor-c.com" },
  { name: "Sponsor D", logo: sponsorD, url: "https://sponsor-d.com" },
  // Add more sponsors as needed
];


export default function SponsorsSection() {
  return (
    <section id="sponsors" className="p-4 text-white bg-customDarkBlue md:p-10">
      <h2 className="mb-8 text-3xl font-bold text-center font-PressStart">Sponsors</h2>
      {sponsors.length > 0 ? (
        <Marquee velocity={12} minScale={0.7} resetAfterTries={200} scatterRandomly={false}>
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 mx-4 bg-gray-800 rounded-lg shadow-lg"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="w-40 h-auto" />
            </a>
          ))}
        </Marquee>
      ) : (
        <div className="flex items-center justify-center h-32">
          <p className="text-2xl font-bold text-gray-300 font-PressStart">Soon to be announced</p>
        </div>
      )}
    </section>
  );
}
