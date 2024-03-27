import React from "react";
import Slider from "react-slick";
import { CARD } from "./teamCarouselConstants";
import TeamShowcaseCard from "./TeamShowcaseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-20 ml-10 mt-60">
      <h2 className="mb-20 text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl" style={{ fontFamily: "Faucet" }}>
        DISRUPT IS COLLABORATIVE, INCLUSIVE, & AGILE
      </h2>

      <Slider {...settings}>
        {CARD.map((card) => (
          <div key={card.key}>
            <TeamShowcaseCard image={card.img} alt={card.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
