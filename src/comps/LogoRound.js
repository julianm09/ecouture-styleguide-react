import styled from 'styled-components';
import React, { useRef, useState, useEffect } from 'react';
import './LogoRound.css';



export const LogoRound = ({ logoPosition, logoPositionInner }) => {


/*     window.addEventListener('scroll', () => {
        if (window.scrollY > 50 || !mobileMenu) {
            setLogoPosition('corner')
            setLogoPositionInner('corner-round')
        } else {
            setLogoPosition('hero')
            setLogoPositionInner('hero-round')

        }
    }) */

    


    return (
        <>
        <a href="#top"></a>
            <img
            className={logoPosition}

            src='/logo-round.svg'/>
            <img 
            className={logoPositionInner}           
    
            src='/earth.png'/>



        </>
        
    )

}