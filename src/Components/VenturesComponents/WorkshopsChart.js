// // WorkshopsChart.js
//
// import React from "react";
// import { WORKSHOP_CARDS } from "./WorkshopConstants";
// import WorkshopCard from "./WorkshopCard";
// import chanceToWinStar from "../../img/chanceToWinStar.svg";
//
// export default function WorkshopsChart() {
//     return (
//         <div className="flex flex-col items-center w-full pb-10 sm:px-12 bg-black">
//             <p className="mb-8 text-3xl font-bold text-center text-white sm:mb-12 sm:text-5xl">
//                 WORKSHOP SCHEDULE
//             </p>
//
//             <div className="relative w-full max-w-5xl">
//                 <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white -translate-x-1/2"></div>
//
//                 {WORKSHOP_CARDS.map((card, index) => {
//                     const position = index % 2 === 0 ? "left" : "right";
//
//                     return (
//                         <WorkshopCard
//                             key={card.key}
//                             index={index}
//                             position={position}
//                             header={card.header}
//                             workshopNum={card.workshopNum}
//                             date={card.date}
//                             startTime={card.startTime}
//                             endTime={card.endTime}
//                             topic1={card.topic1}
//                             topic2={card.topic2}
//                         />
//                     );
//                 })}
//             </div>
//
//             <div className="flex items-center justify-center mt-12">
//                 <p className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mr-6 md:mr-12 lg:mr-24">
//                     THE CHANCE TO WIN
//                 </p>
//                 <img
//                     src={chanceToWinStar}
//                     alt="star"
//                     className="items-center h-12 md:h-16 lg:h-20"
//                 />
//             </div>
//         </div>
//     );
// }


import React from "react";
import { WORKSHOP_CARDS } from "./WorkshopConstants";
import WorkshopCard from "./WorkshopCard";
import chanceToWinStar from "../../img/chanceToWinStar.svg";

export default function WorkshopsChart() {
    return (
        <div className="flex flex-col items-center w-full pb-10 px-4 bg-black">
            <p className="mb-8 text-3xl font-bold text-center text-white sm:mb-12 sm:text-5xl">
                WORKSHOP SCHEDULE
            </p>

            <div className="relative w-full max-w-6xl mx-auto">
                {WORKSHOP_CARDS.map((card, index) => {
                    const position = index % 2 === 0 ? "left" : "right";
                    return (
                        <WorkshopCard
                            key={card.key}
                            index={index}
                            position={position}
                            header={card.header}
                            workshopNum={card.workshopNum}
                            date={card.date}
                            startTime={card.startTime}
                            endTime={card.endTime}
                            topic1={card.topic1}
                            topic2={card.topic2}
                        />
                    );
                })}
            </div>

            <div className="flex items-center justify-center mt-12">
                <p className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mr-6 md:mr-12 lg:mr-24">
                    THE CHANCE TO WIN
                </p>
                <img
                    src={chanceToWinStar}
                    alt="star"
                    className="items-center h-12 md:h-16 lg:h-20"
                />
            </div>
        </div>
    );
}
