import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa"; // For LinkedIn icon
import speakerA from './speakerA.png';
import speakerB from './speakerB.png';

const speakers = [
  { name: "John Doe", title: "CEO, FinTech Inc.", bio: "Expert in financial technology.", img: speakerA, linkedin: "https://linkedin.com/in/johndoe" },
  { name: "Jane Smith", title: "CFO, StockCorp", bio: "Specialist in stock markets.", img: speakerB, linkedin: "https://linkedin.com/in/janesmith" },
  // Add more speakers as needed
];

export default function SpeakersSection() {
  return (
    <section id="speakers" className="p-4 text-white bg-customDarkBlue md:p-10">
      <h2 className="mb-8 text-3xl font-bold text-center font-PressStart">Speakers</h2>
      {speakers.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 text-center transition-all transform border border-gray-700 rounded-lg shadow-xl bg-gradient-to-r from-customDarkBlue to-blue-800 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={speaker.img} alt={speaker.name} className="w-24 h-24 mb-4 border-2 border-green-500 rounded-full" />
              <h3 className="text-xl font-bold">{speaker.name}</h3>
              <p className="text-sm text-green-500">{speaker.title}</p>
              <p className="mt-2">{speaker.bio}</p>
              <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 text-red-500 hover:text-red-300">
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-32">
          <p className="text-2xl font-bold text-gray-300 font-PressStart">Soon to be announced</p>
        </div>
      )}
    </section>
  );
}