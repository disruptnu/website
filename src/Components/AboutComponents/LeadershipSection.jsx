import React from "react";
import FadeIn from "../shared/FadeIn";

const leaders = [
  // Executive
  { name: "Arsh Jafri", title: "President", headshot: null, linkedin: "https://www.linkedin.com/in/arshjafri/" },
  { name: "Divya Thoppae", title: "Vice President", headshot: null, linkedin: "https://www.linkedin.com/in/divya-thoppae/" },
  { name: "TBD", title: "Director of Operations", headshot: null, linkedin: null },
  // Branch Directors
  { name: "Chelsea Kwan", title: "Director of Consulting", headshot: null, linkedin: "https://www.linkedin.com/in/chelseagkwan/" },
  { name: "TBD", title: "Director of Quant", headshot: null, linkedin: null },
  { name: "TBD", title: "Director of Research", headshot: null, linkedin: null },
  { name: "TBD", title: "Director of Finnovate", headshot: null, linkedin: null },
];

export default function LeadershipSection() {
  return (
    <section>
      <div className="px-6 py-20 max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-text-primary mb-3">
            Leadership
          </h2>
          <p className="text-base text-text-muted mb-12">
            The team behind Disrupt.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
          {leaders.map((leader, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div>
                {leader.headshot ? (
                  <img
                    src={leader.headshot}
                    alt={`${leader.name} headshot`}
                    className="w-20 h-20 rounded-full mb-3 object-cover bg-gray-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full mb-3 bg-gray-200" />
                )}
                {leader.linkedin ? (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-text-primary hover:underline"
                  >
                    {leader.name}
                  </a>
                ) : (
                  <p className="font-medium text-text-primary">{leader.name}</p>
                )}
                <p className="text-sm text-text-muted">{leader.title}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
