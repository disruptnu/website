import React, { useRef } from "react";
import { newsletter } from "../NewsroomComponents/NewsLetterItems/newsLetterConstants";
import FadeIn from "../shared/FadeIn";

export default function FeaturedArticles() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="py-20 max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-end justify-between px-6 mb-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
                Featured
              </h2>
              <p className="text-base text-text-muted">
                Recent articles from our analysts.
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
                aria-label="Scroll left"
              >
                &larr;
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-secondary hover:bg-gray-100 transition"
                aria-label="Scroll right"
              >
                &rarr;
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newsletter.map((article) => (
              <a
                key={article.name}
                href={article.navLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[280px] sm:w-[360px] group snap-start"
              >
                <div className="h-48 rounded-card mb-4 bg-surface-primary flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <p className="text-xs text-text-muted mb-2">
                  {article.date} &middot; {article.author}
                </p>
                <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:underline">
                  {article.name}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {article.description}
                </p>
              </a>
            ))}

            <a
              href="https://disrupt-fintech.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[280px] sm:w-[360px] h-48 rounded-card bg-surface-primary flex items-center justify-center group snap-start"
            >
              <span className="text-white font-medium group-hover:underline">
                Read more on Medium &rarr;
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
