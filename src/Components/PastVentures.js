import React, { useState, useEffect } from 'react';
import PastVenturesOpeningScreen from './PastVenturesComponents/PastVenturesOpeningScreen';
import PastVenturesExamples from './PastVenturesComponents/PastVenturesExamples';
import Footer from './HomeComponents/Footer';


export default function PastVentures() {
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
            <PastVenturesOpeningScreen
            hamburgerMenuOpen={hamburgerMenuOpen}
            toggleHamburgerMenu={toggleHamburgerMenu}/>
            <PastVenturesExamples />
            <Footer/>
        </div>
    )
};