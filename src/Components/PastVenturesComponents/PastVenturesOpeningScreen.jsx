import React from "react";

export default function PastVenturesOpeningScreen({ hamburgerMenuOpen }) {
  if (!hamburgerMenuOpen) {
    return (
      <div>
        <div className="w-screen h-screen relative">
          <div className="w-screen h-3/4 flex flex-col justify-center items-center">
            <div className=" w-auto flex flex-col items-cente justify-center">
              <p
                className="h-3/4 text-white font-semibold text-8xl"
                style={{
                  fontFamily: "Faucet",
                  fontFeatureSettings: "'dlig' on, 'ss01' on",
                }}
              >
                PAST FINNOVATE EVENTS
              </p>
              <p
                className="text-white text-2xl self-end"
                style={{ fontFamily: "Usual-Light" }}
              >
                by disrupt
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
