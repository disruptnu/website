import React from "react";
import NewsroomLanding from "./NewsroomComponents/NewsroomLanding";
import FeaturedNews from "./NewsroomComponents/FeaturedNews";
import Newsletters from "./NewsroomComponents/Newsletters";

export default function Newsroom() {
  return (
    <>
      <NewsroomLanding />
      <FeaturedNews />
      <Newsletters />
    </>
  );
}
