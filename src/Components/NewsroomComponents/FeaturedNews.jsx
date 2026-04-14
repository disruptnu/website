import React from "react";
import { newsletter } from "./NewsLetterItems/newsLetterConstants";

export default function FeaturedNews() {
  const featured = newsletter.slice(0, 3);

  return (
    <section className="bg-white">
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-sm text-text-muted uppercase tracking-wide mb-8">Featured</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <a key={item.name} href={item.navLink} target="_blank" rel="noopener noreferrer" className="group">
              <img className="w-full h-48 object-cover rounded mb-3" src={item.img} alt={item.name} loading="lazy" />
              <h3 className="text-lg font-bold text-text-primary mb-2">{item.name}</h3>
              <span className="text-sm text-text-primary font-medium">Read more &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
