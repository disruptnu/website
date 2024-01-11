import { newsletter } from "./NewsLetterItems/newsLetterConstants";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

function FeaturedCard(props) {
  console.log(props);
  return (
    <div className="px-10 flex flex-col items-center min-w-max min-h-max">
      <img
        className="rounded-sm pb-2 w-130"
        src={props.image}
        alt={props.alt}
      />
      <div className="flex justify-between w-130 mx-6">
        <h3
          className="text-white font-bold"
          style={{
            fontFamily: "Faucet",
            fontFeatureSettings: "'ss03' on, 'ss02' on, 'ss01' on",
            fontSize: "1.3rem",
          }}
        >
          {props.header}
        </h3>
        <NavLink
          to={props.navLink}
          className="text-white border border-solid py-2 px-6 rounded-md"
          style={{
            fontFamily: "Usual-Light",
            alignItems: "center",
            display: "flex",
            fontSize: "1rem",
            height: "5rem",
          }}
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
}

export default function FeaturedNews() {
  const containerRef = useRef(null);

  const featuredNews = newsletter.slice(0, 3);

  return (
    <div>
      <div>
        <div
          className="flex justify-between items-center align-middle text-white text-xs ml-10 my-10 font-bold"
          style={{ fontFamily: "Usual-Light" }}
        >
          <h6 className="w-32">/ FEATURED</h6>
          <div className="flex justify-end text-blue-500 text-lg w-screen h-5 pr-10"></div>
        </div>
        <div
          className="flex flex-nowrap justify-around w-full h-3/4 text-2xl pb-14 mt-4 mx-auto divide-gray-800"
          ref={containerRef}
        >
          {featuredNews.map((card) => (
            <FeaturedCard
              key={card.key}
              image={card.img}
              header={card.name}
              alt={card.alt}
              navLink={card.navLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
