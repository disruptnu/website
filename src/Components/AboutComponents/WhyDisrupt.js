import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu';
import disruptLogo from "../../img/logo A.svg";
import hamburgerIcon from "../../img/hamburgerIcon.svg";

export default function WhyDisrupt({ hamburgerMenuOpen, toggleHamburgerMenu}) {
    // Use this state to toggle the hamburger menu, false = closed, true = open
    function handleClickHamburgerMenu() {
        toggleHamburgerMenu();
    }

    if (!hamburgerMenuOpen){
        return (
            <div className="w-screen h-screen relative">
                <div className="w-screen h-20 flex items-start justify-between">
                    <div className="flex items-center">
                        <div>
                            <NavLink to="/">
                                <img src={disruptLogo} alt="testLogo" className="w-20 h-20 ml-3" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex items-center py-4 border border-solid rounded-full border-[#b5f727] mr-5 mt-5 hover:scale-110">
                        <img src={hamburgerIcon} alt="hamburgerMenuIcon" onClick={handleClickHamburgerMenu}
                             className="w-14 h-5 hover:cursor-pointer" />
                    </div>
                </div>
                <div className="w-screen flex flex-col items-start pl-32 mt-44">
                    <div className="text-white font-bold py-8 text-7xl"
                         style={{fontFamily: "Faucet", fontFeatureSettings: "'dlig' on, 'ss03' on, 'ss02' on, 'ss01' on"}}>
                        <p>WHY DISRUPT?</p>
                    </div>
                    <p className="text-white text-2xl pb-8 w-1/2"
                       style={{fontFamily: "Usual-Regular"}}>
                        At Northeastern University, we have recognized the disruptive power of technology in finance and have started Disrupt to collaborate to change the finance industry.
                    </p>
                </div>
            </div>
        )
    }
    else {
        return (
            <HamburgerMenu hamburgerMenuOpen={hamburgerMenuOpen} toggleHamburgerMenu={toggleHamburgerMenu} />
        )
    }
}