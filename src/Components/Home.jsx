import React from "react";
import OpeningScreen from "./HomeComponents/OpeningScreen";
import WhoWeAre from "./HomeComponents/WhoWeAre";
import WhatWeDo from "./HomeComponents/WhatWeDo";
import WhatWeRun from "./HomeComponents/WhatWeRun";
import Community from "./HomeComponents/Community";

export default function Home() {
  return (
    <>
      <OpeningScreen />
      <WhoWeAre />
      <WhatWeDo />
      <WhatWeRun />
      <Community />
    </>
  );
}
