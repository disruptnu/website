import React, { useState, useEffect } from 'react';
import Footer from './HomeComponents/Footer';
import NewsroomLanding from './NewsroomComponents/NewsroomLanding';
import FeaturedNews from './NewsroomComponents/FeaturedNews';
import Newsletters from './NewsroomComponents/Newsletters';

export default function Newsroom() {

    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerMenuOpen(!hamburgerMenuOpen);
    }

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
            <NewsroomLanding 
            hamburgerMenuOpen={hamburgerMenuOpen}
            toggleHamburgerMenu={toggleHamburgerMenu}/>
            <FeaturedNews />
            <Newsletters />
            <Footer />
        </div>
    )
};