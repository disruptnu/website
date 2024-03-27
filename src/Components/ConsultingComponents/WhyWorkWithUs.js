import React from "react";
import { CARD } from "./ConsultingConstants";
import ConsultingBenefitCard from "./ConsultingBenefitCard";
import CommitmentChart from "../../img/CommitmentChart.svg";
import contactArrow from "../../img/contactArrow.svg";

export default function WhyWorkWithUs() {
  return (
    <div className="flex-col items-center pt-10 pb-10 lg:pt-40 lg:pb-36">
      <p className="mt-8 mb-1 text-3xl text-center text-white lg:text-5xl" style={{ fontFamily: "Faucet", fontFeatureSettings: "'dlig' on, 'ss01' on"}}>
        WHY WORK WITH US?
      </p>
      <p className="mt-4 mb-1 text-xl text-center text-white lg:text-2xl" style={{ fontFamily: "Usual-Light" }}>
        By working with Disrupt Consulting, you’ll receive:
      </p>

      {/* Adjusted grid setup for better card width control */}
      <div className="items-center max-w-6xl gap-6 px-4 mt-4 ">
        {CARD.map((card) => (
          <ConsultingBenefitCard key={card.key} header={card.header} img={card.img} description={card.description} className="items-center max-w-lg mx-auto" />
        ))}
      </div>

      <img className="w-full max-w-md mx-auto mt-10 lg:mt-36 lg:max-w-none" src={CommitmentChart} alt="Commitment Chart" />
      <div className="flex flex-col items-center justify-center w-full px-4 py-16 mt-10 bg-black border lg:w-8/12 lg:py-32 lg:mt-36">
        <p className="text-3xl text-center text-white lg:text-5xl" style={{ fontFamily: "Faucet", fontFeatureSettings: "'ss01' on" }}>
          INTERESTED IN <span style={{ color: "#009AFF" }}>ELEVATING</span> YOUR ORGANIZATION?
        </p>
        <p className="flex items-center justify-center mt-8 text-xl text-center text-white lg:mt-16 lg:text-2xl" style={{ fontFamily: "Usual-Regular" }}>
          Contact us at <a href="mailto:elevatedisruptneu@gmail.com" className="ml-2 text-[#BAFF29] underline flex items-center">elevatedisruptneu@gmail.com
            <img src={contactArrow} alt="Contact Arrow" className="ml-2" />
          </a>
        </p>
      </div>
    </div>
  );
}
