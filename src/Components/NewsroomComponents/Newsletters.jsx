import React from "react";
import { newsletter } from "./NewsLetterItems/newsLetterConstants";

export default function Newsletters() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <p className="text-sm text-text-muted uppercase tracking-wide mb-8">Newsletters</p>
      <div className="space-y-8">
        {newsletter.map((item) => (
          <div key={item.name} className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-8">
            <img className="w-full md:w-64 h-40 object-cover rounded" src={item.img} alt={item.name} loading="lazy" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-text-primary mb-1">{item.name}</h3>
              <p className="text-sm text-text-muted mb-2">{item.date}</p>
              <p className="text-text-secondary mb-3">{item.description}</p>
              <p className="text-sm text-text-muted mb-3">By {item.author}</p>
              <a href={item.navLink} target="_blank" rel="noopener noreferrer" className="text-text-primary font-medium hover:underline text-sm">
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
