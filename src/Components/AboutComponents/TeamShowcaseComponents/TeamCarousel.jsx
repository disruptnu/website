import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CARD } from "./teamCarouselConstants";
import TeamShowcaseCard from "./TeamShowcaseCard";

export default function TeamCarousel() {
  return (
    <div className="mb-20 ml-10 mt-60">
      <h2 className="mb-20 text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl" style={{ fontFamily: "Faucet" }}>
        DISRUPT IS COLLABORATIVE, INCLUSIVE, & AGILE
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          600: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        {CARD.map((card) => (
          <SwiperSlide key={card.key}>
            <TeamShowcaseCard image={card.img} alt={card.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
