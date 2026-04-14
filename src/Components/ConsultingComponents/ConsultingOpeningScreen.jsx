import React from "react";
import arrowDown from "../../img/arrowDown.svg";

function scrollDown() {
  window.scrollTo(0, document.body.scrollHeight)
}

export default function PastVenturesOpeningScreen() {
  return (
    <>
      <div>
        <div className="relative flex flex-col items-center justify-center w-screen">
          {/* Main Content */}
          <div
            className="flex flex-col items-end w-5/12 pb-20 pt-28"
            style={{ fontFamily: "Faucet" }}
          >
            <p className="mb-1 text-4xl text-white">disrupt</p>
            <p
              className="flex-col pb-8 text-4xl text-white sm:text-2xl md:text-5xl"
              style={{ fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on" }}
            >
              CONSULTING
            </p>
            <p
              className="mx-auto text-justify text-white max-w-3xl text-sm sm:text-base md:text-lg"
              style={{ fontFamily: "Usual-Regular", hyphens: "auto" }}
            >
              Disrupt Consulting is a pro-bono student consulting club
              specializing in fintech solutions. Founded out of Northeastern
              University, we provide high-impact consulting services to startups
              and established firms, bridging gaps in market strategy, technical
              development, and regulatory compliance. Our work delivers
              actionable insights, innovative strategies, and scalable solutions
              to fintech companies looking to optimize their operations and
              expand their reach.
            </p>
          </div>
        </div>

        {/* Arrow Down Button */}
        <div className="mt-12 flex justify-center sm:justify-end mr-0 sm:mr-16">
          <button onClick={scrollDown}>
            <img
              src={arrowDown}
              alt="Scroll Down"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>
        </div>
      </div>
    </>
  );
}

