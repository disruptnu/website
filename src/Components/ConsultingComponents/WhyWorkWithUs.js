import React from "react";
import { CARD } from "./ConsultingConstants";
import ConsultingBenefitCard from "./ConsultingBenefitCard";
import CommitmentChart from "../../img/CommitmentChart.svg";
import contactArrow from "../../img/contactArrow.svg";

export default function WhyWorkWithUs() {
  return (
    <div className="pt-40 pb-36 items-center flex flex-col justify-center">
      <p
        className="text-white text-5xl mt-8 mb-1 text-center"
        style={{
          fontFamily: "Faucet",
          fontFeatureSettings: "'dlig' on, 'ss01' on",
        }}
      >
        WHY WORK WITH US?
      </p>
      <p
        className="text-white text-2xl mb-1 text-center mt-4"
        style={{ fontFamily: "Usual-Light" }}
      >
        By working with Disrupt Consulting, you’ll receive:
      </p>

      <div className="flex flex-nowrap justify-center h-3/4 text-2xl pb-14 mt-4 mx-auto overflow-x-hidden ">
        {CARD.map((card) => (
          <ConsultingBenefitCard
            key={card.key}
            header={card.header}
            img={card.img}
            description={card.description}
          />
        ))}
      </div>

      <img
        className="w-full mt-36"
        src={CommitmentChart}
        alt={CommitmentChart}
      />
      <div className="flex justify-center items-center flex-col bg-black border mt-36 w-8/12 py-32">
        <p
          className="text-white text-5xl text-center w-4/5"
          style={{
            fontFamily: "Faucet",
            fontFeatureSettings: "'ss01' on",
          }}
        >
          INTERESTED IN <span style={{ color: "#009AFF" }}>ELEVATING</span> YOUR
          ORGANIZATION?
        </p>
        <p
          className="text-white text-2xl text-center mt-16"
          style={{
            fontFamily: "Usual-Regular",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Contact us at{" "}
          <a
            href="mailto:elevatedisruptneu@gmail.com"
            style={{
              color: "#BAFF29",
              textDecoration: "underline",
              display: "flex",
              alignItems: "center",
              marginLeft: "8px",
            }}
          >
            elevatedisruptneu@gmail.com
            <span style={{ marginLeft: "5px" }}>
              {" "}
              <img src={contactArrow} alt={contactArrow} />
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
