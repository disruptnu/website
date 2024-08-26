import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "./bgimage.png";

export default function OverviewSection() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-01T00:00:00"); // Replace with your hackathon start date
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="overview" 
      className="flex flex-col items-center justify-center p-4 text-white bg-center bg-cover md:p-10" 
      style={{ backgroundImage: `url(${bgImage})`, height: "100vh" }} // Full-screen height
    >
    <div className="overlay"></div>
    <div className="content">
      <motion.h2
        className="pb-48 text-5xl font-bold text-center text-white font-PressStart text-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        FINHACK 2024
      </motion.h2>
      <motion.p
        className="pb-12 text-white m4 font-PressStart text-shadow text-bold"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Welcome to the NYSE-themed Hackathon! This event challenges participants to explore innovative solutions in finance and technology, inspired by the New York Stock Exchange.
      </motion.p>
    </div>

      <div className="flex flex-col items-center pb-8 mt-8">
        <div className="flex space-x-4 text-2xl font-bold">
          <div className="text-center">
            <span className="block text-green-500">{timeLeft.days}</span>
            <span className="text-white">Days</span>
          </div>
          <div className="text-center">
            <span className="block text-green-500">{timeLeft.hours}</span>
            <span className="text-white">Hours</span>
          </div>
          <div className="text-center">
            <span className="block text-green-500">{timeLeft.minutes}</span>
            <span className="text-white">Minutes</span>
          </div>
          <div className="text-center">
            <span className="block text-green-500">{timeLeft.seconds}</span>
            <span className="text-white">Seconds</span>
          </div>
        </div>

        <motion.a
          href="/apply"
          className="inline-block px-8 py-4 mt-8 font-bold text-black bg-green-500 rounded-full shadow-lg pb- hover:bg-green-400"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Apply Now
        </motion.a>
      </div>
    </section>
  );
}
