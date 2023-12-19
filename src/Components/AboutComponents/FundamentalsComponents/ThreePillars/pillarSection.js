import React from 'react';

export default function PillarSection(props) {
    return (
        <div className="text-white w-full h-full bg-black text-left">
            <div className="flex flex-col items-start mb-10 mt-6">
                <img className="h-6 w-6 ml-10 mt-5 mb-5" src={props.numberIcon} alt={props.alt}/>
                <h1 className="ml-10 font-bold text-3xl"
                    style={{fontFamily: 'Faucet', fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on"}}>{props.header}</h1>
                <p className="mt-6 w-3/4 text-2xl ml-10"
                   style={{fontFamily: 'Usual-Regular'}}>{props.description}</p>
            </div>
        </div>
    );
}