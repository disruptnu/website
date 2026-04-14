import React from "react";

export default function WhyDisrupt({ hamburgerMenuOpen}) {

  if (!hamburgerMenuOpen) {
    return (
      <>
        <div className="w-screen min-h-screen overflow-hidden">
          <div className="flex flex-col items-right pl-8 mt-24 md:pl-32 md:mt-44">
            <h1
              className="py-4 text-5xl font-bold text-white md:py-8 md:text-7xl"
              style={{
                fontFamily: "Faucet",
                fontFeatureSettings:
                  "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on",
              }}
            >
              WHY DISRUPT?
            </h1>
            <p
              className="w-full pb-8 text-lg text-white md:text-2xl md:w-1/2 "
              style={{ fontFamily: "Usual-Regular" }}
            >
              At Northeastern University, we have recognized the disruptive
              power of technology in finance and have started Disrupt to
              collaborate to change the finance industry.
            </p>
          </div>
        </div>
      </>
    );
  }
}