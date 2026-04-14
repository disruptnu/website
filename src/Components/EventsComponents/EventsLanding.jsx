import React from "react";
import arrowDown from "../../img/arrowDown.svg";

export default function EventsLanding() {
  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full h-20 px-5">
      </div>

      <div className="relative z-0 flex flex-col items-center justify-center h-full">
        <div
          className="flex flex-col items-end w-7/12 pb-20 pt-28 pl-10"
          style={{ fontFamily: "Faucet" }}
        >
          <p className="mb-1 text-4xl text-white">disrupt</p>
          <p
            className="flex-col pb-8 text-9xl text-white sm:text-4xl md:text-7xl"
            style={{
              fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on",
            }}
          >
            EVENTS
          </p>
          <p
            className="mx-auto text-left text-white"
            style={{ fontFamily: "Usual-Regular" }}
          >
            We host bi-weekly events ranging from fireside chats, technology
            workshops, and guest panels to give Northeastern skills and insight
            into the FinTech industry to show how impactful FinTech can be.
            These events are open to everyone at Northeastern and no signup is
            required ahead of time.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-10 mb-8 mr-8">
        <button onClick={scrollDown}>
          <img src={arrowDown} alt="Scroll Down" />
        </button>
      </div>
    </div>
  );
}
