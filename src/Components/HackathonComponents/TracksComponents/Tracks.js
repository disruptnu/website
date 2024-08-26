import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const tracks = [
    {
      name: "Trading Algorithms",
      status: "up",
      description: "Explore the development and application of automated trading systems in financial markets.",
    },
    {
      name: "Financial Data Analytics",
      status: "up",
      description: "Dive into the analysis of financial data to uncover trends, risks, and opportunities.",
    },
    {
      name: "Blockchain and Cryptocurrency",
      status: "down",
      description: "Learn about the technology behind cryptocurrencies and its potential to disrupt traditional finance.",
    },
    {
      name: "Risk Management Solutions",
      status: "up",
      description: "Focus on strategies and tools used to identify, assess, and mitigate financial risks.",
    },
  ];

  const handleClick = (index) => {
    if (selectedTrack === index) {
      setSelectedTrack(null); // Deselects the track if it's clicked again
    } else {
      setSelectedTrack(index); // Selects the track and stops the blinking animation
    }
  };

  return (
    <section id="tracks" className="p-4 text-green-500 bg-customDarkBlue md:p-10">
      <h2 className="text-3xl font-bold text-center text-white font-PressStart">
        Tracks
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-800 rounded-lg cursor-pointer ${
              selectedTrack === index ? '' : 'animate-flicker' // Apply blinking only when not selected
            } ${track.status === "up" ? "text-green-500" : "text-red-500"}`}
            onClick={() => handleClick(index)}
          >
            <div className="font-mono">{track.name}</div>
            <AnimatePresence>
              {selectedTrack === index && (
                <motion.div
                  className="mt-2 text-white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {track.description}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
