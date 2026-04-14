import React from "react";
import backgroundVideo from "../../img/MiniAdDisrupt(NEW BRANDING).mp4";

export default function OpeningScreen() {
  return (
    <div className="relative -mt-20 items-center justify-start w-full h-dvh overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 object-cover w-full h-full"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-10 w-full flex flex-col items-center z-10">
        <h1 className="text-2xl font-bold text-center text-white sm:text-4xl md:text-5xl">
          Disrupt
        </h1>
        <p className="mb-4 text-base text-center text-white sm:text-lg md:text-xl">
          Northeastern's student-led fintech group;
          <br /> <em>where curiosity meets innovation</em>
        </p>
      </div>
    </div>
  );
}
