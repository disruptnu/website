import React from "react";
import ResearchHero from "./ResearchComponents/ResearchHero";
import FeaturedArticles from "./ResearchComponents/FeaturedArticles";
import ResearchContent from "./ResearchComponents/ResearchContent";

export default function Research() {
  return (
    <>
      <ResearchHero />
      <FeaturedArticles />
      <ResearchContent />
    </>
  );
}
