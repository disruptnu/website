import React from 'react';
import HamburgerMenu from '../HamburgerMenu.js';
import disruptLogo from "../../img/logo A.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";
import backgroundVideo from "../../img/testStockVideoBackground.mp4";

export default function OpeningScreen({ hamburgerMenuOpen, toggleHamburgerMenu}) {
    // Use this state to toggle the hamburger menu, false = closed, true = open
    function handleClickHamburgerMenu() {
        toggleHamburgerMenu();
    }
    
    function handleClickJoin() {
        window.location = "https://airtable.com/appYvJkhyjQlVvoqV/shrXCWB0tMh79Ty5i";
    }

    const videoStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1, // Place the video in the background
    };

    if (!hamburgerMenuOpen){
        return (
            <div className="w-screen h-screen relative ">
                <video autoPlay loop muted style={videoStyle}>
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="w-screen h-20 flex items-start justify-between">
                    <div className="flex items-center">
                        <div>
                            <img src={disruptLogo} alt="testLogo" className="w-20 h-20 ml-3" />
                        </div>
                    </div>
                    <div className="flex items-center py-4 border border-solid rounded-full border-[#b5f727] mr-5 mt-5 hover:scale-110">
                        <img src={hamburgerIcon} alt="hamburgerMenuIcon" onClick={handleClickHamburgerMenu}
                             className="w-14 h-5 hover:cursor-pointer" />
                    </div>
                </div>
                <div className="w-screen flex flex-col items-start pl-32 mt-44">
                    <div className="text-white py-8 text-7xl font-bold"
                         style={{fontFamily: "Faucet", fontFeatureSettings: "'dlig' on, 'ss02' on"}}>
                        <p>Disrupt</p>
                    </div>
                    <p className="text-white text-2xl pb-8 w-1/2 font-Usual-Regular" style={{fontFamily: "Usual-Regular"}}>
                        Northeastern's student-led fintech group; <em>where curiosity meets innovation</em>
                    </p>
                    <button className="text-white text-2xl font-bold border border-solid border-[#b5f727] px-12 py-2 rounded-full hover:bg-[#b5f727] hover:text-black" onClick={handleClickJoin}>
                        Join
                    </button>
                </div>
            </div>
        )
    }
    else {
        return (
            <HamburgerMenu  hamburgerMenuOpen={hamburgerMenuOpen} toggleHamburgerMenu={toggleHamburgerMenu}/>
        )
    }

};