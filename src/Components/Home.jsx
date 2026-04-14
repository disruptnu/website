import React from "react";
import WhoWeAre from "./HomeComponents/WhoWeAre";
import OpeningScreen from "./HomeComponents/OpeningScreen";
import WhatWeDo from "./HomeComponents/WhatWeDo";

export default function Home() {
  return (
    <>
      <OpeningScreen />
      <WhoWeAre />
      <WhatWeDo />
    </>
  );
}
