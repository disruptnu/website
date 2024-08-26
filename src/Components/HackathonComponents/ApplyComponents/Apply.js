import React from "react";
import { motion } from "framer-motion";

export default function ApplySection() {
  return (
    <section id="apply" className="p-4 text-center text-white bg-customDarkBlue md:p-10">
      <motion.a
        href="/apply"
        className="inline-block px-8 py-4 font-bold text-black bg-green-500 rounded-full shadow-lg hover:bg-green-400"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Apply Now
      </motion.a>
    </section>
  );
}
