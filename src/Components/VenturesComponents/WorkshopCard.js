import React from "react";
import num1 from "../../img/num1.svg";
import num2 from "../../img/num2.svg";
import workshopsChartCircle from "../../img/workshopsChartCircle.svg";
import workshopsChartLine from "../../img/workshopsChartLine.svg";
import workshopLongArrow from "../../img/workshopLongArrow.svg";

export default function WorkshopCard(props) {
  return (
    <div className="min-w-full pt-12 pl-4 ml-0 sm:min-w-max sm:ml-96 sm:pl-12">
    <div className="flex flex-col items-start pl-4 sm:flex-row sm:pl-28">
      <p className="w-full pt-10 pr-4 text-3xl text-white sm:text-4xl font-regular sm:pt-44 sm:w-20">
        {props.workshopNum}
      </p>
      <div className="flex flex-col items-center pr-12 ml-4 sm:items-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src={workshopsChartCircle}
              alt="circle"
              className="w-6 h-6 mb-8 mr-4"
            />
            <img src={workshopsChartLine} alt="line" className="mr-4 h-76" />
          </div>
          <div className="flex flex-col w-full px-4 mt-12 mb-8 border border-white h-72">
            <div className="flex pb-16 mt-12 items -center">
              <p className="w-1/2 pl-6 text-3xl font-bold text-white">
                {props.date}
              </p>
              <div className="flex items-start pl-4">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-white">
                    {props.startTime}
                  </p>
                  <div className="flex items-center">
                    <img src={workshopLongArrow} alt="" className="w-2" />
                    <div className="ml-4 space-y-4">
                      {props.topic1 ? (
                        <div className="flex items-center">
                          <img src={num1} alt="num1" className="w-6 h-6 mr-4" />
                          <p className="text-white text-md font-regular">
                            {props.topic1}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <img src={num1} alt="num1" className="w-6 h-6 mr-4" />
                          <p className="text-white text-md font-regular">
                            {props.header}
                          </p>
                        </div>
                      )}{" "}
                      {props.topic2 ? (
                        <div className="flex items-center">
                          <img src={num2} alt="num2" className="w-6 h-6 mr-4" />
                          <p className="text-white text-md font-regular">
                            {props.topic2}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-white">
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
