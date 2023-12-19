import React from 'react';

export default function FundamentalsDescription() {
    return (
        <div className="border-b border-solid border-b-gray-400 font-bold">
            <div className="text-white text-xs pl-10 pt-5"
                 style={{fontFamily: "Usual-Light"}}>
                <h6>/ Disrupt Fundamentals</h6>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row mb-12">
                    <p className="text-white text-5xl mx-10 mt-12 w-1/3"
                       style={{fontFamily: "Faucet", fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on"}}>
                        <span className="text-blue-500">3</span> CORE <span className="text-blue-500">PILLARS</span>
                    </p>
                    <div className="text-white w-2/3 text-2xl mt-12 mr-10"
                         style={{fontFamily: "Usual-Regular"}}>
                        <p>
                            Northeastern University and its students have recognized the disruptive power of technology in finance and have thus started the FinTech initiative on campus to become the leaders of this field.
                        </p>
                        <p className="mt-5">
                            Disrupt is a student-led organization that was founded on the basis of 3 pillars.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}