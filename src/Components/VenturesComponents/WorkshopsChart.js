import React from "react";
import { WORKSHOP_CARDS } from "./WorkshopConstants";
import WorkshopCard from "./WorkshopCard";
import chanceToWinStar from "../../img/chanceToWinStar.svg";
import PastVenturesGallery from "../PastVenturesComponents/PastVentureCard";

export default function WorkshopsChart() {
    return (
        <div className="flex flex-col items-center w-full pb-10 px-4 bg-black">
            <p className="mb-8 text-5xl font-bold text-center text-[#b5ff29] tracking-wide" style={{letterSpacing: '0.05em'}}>
                WORKSHOP SCHEDULE
            </p>

            {/* Vertical Timeline with alternating sides and center neon green line */}
            <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center py-10">
                {/* Center neon green line */}
                <div className="absolute left-1/2 top-0 h-full w-4 flex flex-col items-center z-0" style={{transform: 'translateX(-50%)'}}>
                    <div className="h-full w-2 bg-[#b5ff29] rounded-full"></div>
                </div>
                {/* Timeline events */}
                <div className="flex flex-col items-center w-full z-10">
                    {WORKSHOP_CARDS.map((card, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={card.key} className="relative w-full mb-12 flex">
                                {isLeft ? (
                                    <>
                                        {/* Left side event */}
                                        <div className="flex flex-row items-center w-1/2 justify-end pr-12 gap-6">
                                            <div className="flex flex-col items-center" style={{width: '80px'}}>
                                                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#009AFF] border-4 border-[#b5ff29]">
                                                    <span className="text-white text-4xl font-bold">{index+1}</span>
                                                </div>
                                                {/* Award highlight removed */}
                                            </div>
                                            <div className="flex flex-col items-end text-right">
                                                {card.week && <span className="text-xl text-[#b5ff29] font-bold mb-2">{card.week}</span>}
                                                <span className="text-white text-2xl font-bold mb-2">{card.date}</span>
                                                <span className="text-white text-2xl font-extrabold mb-2">{card.header}</span>
                                            </div>
                                        </div>
                                        <div className="w-1/2"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-1/2"></div>
                                        {/* Right side event */}
                                        <div className="flex flex-row items-center w-1/2 justify-start pl-12 gap-6">
                                            <div className="flex flex-col items-center" style={{width: '80px'}}>
                                                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#009AFF] border-4 border-[#b5ff29]">
                                                    <span className="text-white text-4xl font-bold">{index+1}</span>
                                                </div>
                                                {/* Award highlight removed */}
                                            </div>
                                            <div className="flex flex-col items-start text-left">
                                                {card.week && <span className="text-xl text-[#b5ff29] font-bold mb-2">{card.week}</span>}
                                                <span className="text-white text-2xl font-bold mb-2">{card.date}</span>
                                                <span className="text-white text-2xl font-extrabold mb-2">{card.header}</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* WINNING STAR SECTION */}
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

            {/* Connector section */}
            <div className="w-full py-12 bg-gradient-to-b from-black to-gray-900 flex flex-col items-center text-center px-6">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-4">Curious about past winning ideas?</p>
                <p className="text-white max-w-3xl text-base sm:text-lg font-usual-regular">
                    Take a look at what our past ventures have accomplished — innovative projects that made it all the way to the finish line.
                </p>
            </div>

            {/* PAST VENTURES */}
            <div className="w-full bg-black py-16">
                <p className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                    PAST VENTURES
                </p>
                <PastVenturesGallery />
            </div>

        </div>
    );
}
