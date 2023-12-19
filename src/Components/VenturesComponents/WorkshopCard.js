import React from "react";
import num1 from "../../img/num1.svg";
import num2 from "../../img/num2.svg";
import workshopsChartCircle from "../../img/workshopsChartCircle.svg";
import workshopsChartLine from "../../img/workshopsChartLine.svg";
import workshopLongArrow from "../../img/workshopLongArrow.svg";

export default function WorkshopCard(props) {
  return (
    <div className="min-w-max min-h-max ml-96 pl-12 pt-12 ">
      <div className="flex items-start pl-28">
        <p className="text-white text-4xl font-regular pt-44 pr-4 w-20">
          {props.workshopNum}
        </p>

        <div className="flex space-x-16 items-center ml-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src={workshopsChartCircle}
              alt="circle"
              className="w-6 h-6 mr-4 mb-8"
            />
            <img src={workshopsChartLine} alt="line" className="h-76 mr-4" />
          </div>
          <div className="border-white border w-full h-72 flex flex-col px-4 mt-12 mb-8">
            <div className="pb-16 flex items-center mt-12 items-center">
              <p className="text-white text-3xl font-bold w-1/2 pl-6">
                {props.date}
              </p>
              <div className="flex items-start pl-4">
                <div className="flex flex-col">
                  <p className="text-white text-2xl font-bold">
                    {props.startTime}
                  </p>
                  <div className="flex items-center">
                    <img src={workshopLongArrow} alt="" className="w-2" />
                    <div className="ml-4 space-y-4">
                      <div className="flex items-center">
                        <img src={num1} alt="num1" className="w-6 h-6 mr-4" />
                        <p className="text-white text-md font-regular">
                          {props.topic1}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img src={num2} alt="num2" className="w-6 h-6 mr-4" />
                        <p className="text-white text-md font-regular">
                          {props.topic2}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-2xl font-bold">
                    {props.endTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
