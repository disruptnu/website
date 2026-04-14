import React from "react";

export default function NewsroomLanding() {
  // Use this state to toggle the hamburger menu, false = closed, true = open
  return (
    <>
      <div className="relative w-screen overflow-hidden">
        <div className="flex flex-col items-start pl-8 mt-5 md:pl-32 md:mt-10">
          <div
            className="py-8 text-5xl font-bold text-white md:text-7xl"
            style={{ fontFamily: "Faucet" }}
          >
            <p>Blog</p>
          </div>
        </div>
      </div>
    </>
  );
}
