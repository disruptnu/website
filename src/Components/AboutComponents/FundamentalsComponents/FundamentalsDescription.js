import React from "react";

export default function FundamentalsDescription() {
  return (
    <div className="font-bold border-b border-solid border-b-gray-400">
      <div className="pt-5 pl-4 text-xs text-white sm:pl-10" style={{ fontFamily: "Usual-Light" }}>
        <h6>Disrupt Fundamentals</h6>
      </div>
      <div className="flex flex-col items-center justify-center px-4 sm:px-10">
        <p className="w-full my-12 text-3xl text-center text-white sm:text-5xl sm:text-left" style={{
            fontFamily: "Faucet",
            fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on",
          }}>
          <span className="text-blue-500">ONE</span> MAIN <span className="text-blue-500">VISION</span>
        </p>
        <div className="w-full mb-12 text-xl text-white sm:text-2xl" style={{ fontFamily: "Usual-Regular" }}>
          <p>
            Northeastern University and its students have recognized the disruptive power of technology in finance and have thus started the FinTech initiative on campus to become leaders of this field.
          </p>
        </div>
      </div>
    </div>
  );
}
