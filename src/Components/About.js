import React, { useState, useEffect } from 'react';
import WhyDisrupt from './AboutComponents/WhyDisrupt';
import FundamentalsDescription from './AboutComponents/FundamentalsComponents/FundamentalsDescription';
import ThreePillars from './AboutComponents/FundamentalsComponents/ThreePillars';
import TeamShowcase from './AboutComponents/TeamShowcase';
import TeamCarousel from './AboutComponents/TeamShowcaseComponents/TeamCarousel';
import Footer from './HomeComponents/Footer';

export default function About() {
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerMenuOpen(!hamburgerMenuOpen);
    }

    // Stop scrolling when Hamburger Menu is Open (hide overflow)
    useEffect(() => {
        if (hamburgerMenuOpen){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    });

    return (
        <div>
            <WhyDisrupt
            hamburgerMenuOpen={hamburgerMenuOpen}
            toggleHamburgerMenu={toggleHamburgerMenu}/>
            <div className="divide-y divide-gray-800">
                <FundamentalsDescription/>
                <ThreePillars/>
            </div>
            <TeamCarousel/>
            <TeamShowcase/>
            <div>
                <p className="text-white text-6xl font-bold text-left w-4/5 ml-10 mb-20 pt-20"
                   style={{fontFamily: 'Faucet', fontFeatureSettings: "'dlig' on, 'ss02' on, 'ss01' on"}}>
                    LET'S BUILD A FINTECH COMMUNITY <span className="text-blue-500">TOGETHER</span>.
                </p>
            </div>
            <Footer/>
        </div>
    )
};