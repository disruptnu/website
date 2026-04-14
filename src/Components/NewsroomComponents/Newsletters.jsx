import React from "react";
import { newsletter } from "./NewsLetterItems/newsLetterConstants";

export default function Newsletters() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <p className="text-sm text-gray-400 uppercase tracking-wide mb-8">Newsletters</p>
      <div className="space-y-8">
        {newsletter.map((item) => (
          <div key={item.name} className="flex flex-col md:flex-row gap-6 border-b border-gray-800 pb-8">
            <img className="w-full md:w-64 h-40 object-cover rounded" src={item.img} alt={item.name} />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{item.date}</p>
              <p className="text-gray-300 mb-3">{item.description}</p>
              <p className="text-sm text-gray-400 mb-3">By {item.author}</p>
              <a href={item.navLink} target="_blank" rel="noopener noreferrer" className="text-brand-lime hover:underline text-sm">
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
