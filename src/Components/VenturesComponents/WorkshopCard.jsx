import React from "react";

const COLOR_CLASSES = [
    {
        bg: "bg-gradient-to-r from-teal-400 to-teal-300",
        text: "text-gray-900",
        dot: "bg-teal-400",
    },
    {
        bg: "bg-gradient-to-r from-sky-400 to-sky-300",
        text: "text-gray-900",
        dot: "bg-sky-400",
    },
    {
        bg: "bg-gradient-to-r from-green-400 to-green-300",
        text: "text-gray-900",
        dot: "bg-green-400",
    },
    {
        bg: "bg-gradient-to-r from-lime-300 to-lime-200",
        text: "text-gray-900",
        dot: "bg-lime-300",
    },
];

export default function WorkshopCard(props) {
    const colorSet = COLOR_CLASSES[props.index % COLOR_CLASSES.length];
    const isLeft = props.position === "left";

    return (
        <div className="relative flex flex-col w-full mb-10 sm:mb-14">
            {/*

      */}
            <div
                className="hidden sm:flex absolute top-0 flex-col items-center"
                style={{
                    left: "50%",
                }}
            >
                <div className="w-[2px] h-full bg-gray-500"></div>
                <div
                    className={`w-5 h-5 rounded-full ${colorSet.dot} mt-0 -mb-2`}
                ></div>
            </div>

            {/*

      */}
            <div
                className={`
          relative
          sm:max-w-[80%] md:max-w-[60%] lg:max-w-[45%]
          w-[90%] mx-auto
          py-4 px-6 rounded-xl shadow-lg
          transition-all duration-300 transform hover:scale-[1.02]
          ${colorSet.bg} ${colorSet.text}
          flex flex-col
          ${isLeft ? "sm:self-end" : "sm:self-start"}
          ${isLeft ? "sm:items-end sm:text-right" : "sm:items-start sm:text-left"}
        `}
                style={{
                    marginLeft: isLeft ? "auto" : "0",
                    marginRight: isLeft ? "0" : "auto",
                }}
            >
                <div className="text-xl sm:text-2xl font-bold mb-2">
                    {props.date}
                </div>

                <div className="text-lg sm:text-xl font-semibold mb-1">
                    {props.header || `Workshop ${props.workshopNum}`}
                </div>

                <div className="text-sm sm:text-base mb-3 font-medium">
                    {props.startTime} - {props.endTime}
                </div>

                {props.topic1 && (
                    <div className="text-sm sm:text-base mb-1">
                        {props.topic1}
                    </div>
                )}
                {props.topic2 && (
                    <div className="text-sm sm:text-base">
                        {props.topic2}
                    </div>
                )}
            </div>
        </div>
    );
}
