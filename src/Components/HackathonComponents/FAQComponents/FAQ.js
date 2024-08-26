import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqCategories = [
  {
    category: "Registration",
    items: [
      { question: "How do I register?", answer: "You can register by clicking the Apply Now button." },
      { question: "Is there a registration fee?", answer: "No, the registration is free for all participants." },
    ],
  },
  {
    category: "Event Details",
    items: [
      { question: "What is the theme?", answer: "The theme is centered around the New York Stock Exchange." },
      { question: "Where will the event be held?", answer: "The event will be held online due to the current circumstances." },
    ],
  },
  // Add more categories as needed
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState({});

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const currentCategory = activeIndex[categoryIndex] === faqIndex ? null : faqIndex;
    setActiveIndex({ ...activeIndex, [categoryIndex]: currentCategory });
  };

  return (
    <section id="faq" className="p-4 text-white bg-customDarkBlue md:p-10">
      <h2 className="mb-8 text-3xl font-bold text-center font-PressStart">FAQ</h2>
      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="mb-4 text-2xl font-bold text-center text-green-500 font-PressStart">{category.category}</h3>
          <div className="space-y-4">
            {category.items.map((faq, faqIndex) => (
              <motion.div
                key={faqIndex}
                className="p-4 bg-gray-800 rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-bold text-lg ${
                      activeIndex[categoryIndex] === faqIndex ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="ml-4">
                    {activeIndex[categoryIndex] === faqIndex ? (
                      <FaChevronUp className="text-red-500" />
                    ) : (
                      <FaChevronDown className="text-green-500" />
                    )}
                  </div>
                </div>
                {activeIndex[categoryIndex] === faqIndex && (
                  <motion.p
                    className="mt-2 text-gray-300"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
