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
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-medium text-text-primary mb-10">
        Disrupt is Collaborative, Inclusive, & Agile
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {CARD.map((card) => (
          <SwiperSlide key={card.key}>
            <TeamShowcaseCard image={card.img} alt={card.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
