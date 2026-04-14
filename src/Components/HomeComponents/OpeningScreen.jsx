import React from "react";
import backgroundVideo from "../../img/MiniAdDisrupt(NEW BRANDING).mp4";

export default function OpeningScreen({ hamburgerMenuOpen}) {
  return (
    <>
      <div className="relative -mt-20 items-center justify-start w-screen h-screen overflow-hidden">
        {/* Render the video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 z-0 object-cover w-full h-full"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content within the video area */}
        <div
          className={`absolute bottom-10 w-full flex flex-col items-center z-10 ${
            hamburgerMenuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          <h1 className="text-2xl font-bold text-center text-white sm:text-4xl md:text-5xl">
            Disrupt
          </h1>
          <p className="mb-4 text-base text-center text-white sm:text-lg md:text-xl">
            Northeastern's student-led fintech group;
            <br /> <em>where curiosity meets innovation</em>
          </p>
          {/* <button
            onClick={() =>
              (window.location =
                "https://airtable.com/appYvJkhyjQlVvoqV/shrXCWB0tMh79Ty5i")
            }
            className="px-6 py-3 text-white transition-colors bg-transparent border border-white rounded-full hover:bg-white hover:text-black"
          >
            Join Us
          </button> */}
        </div>
      </div>
    </>
  );
}
