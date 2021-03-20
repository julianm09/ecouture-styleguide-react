import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import './LogoRound.css';



export const LogoRound = () => {


    const [logoPosition, setLogoPosition] = useState('hero');
    const [logoPositionInner, setLogoPositionInner] = useState('hero-round');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setLogoPosition('corner')
            setLogoPositionInner('corner-round')
        } else {
            setLogoPosition('hero')
            setLogoPositionInner('hero-round')

        }
    })

    


    return (
        <>

            <img
            className={logoPosition}

            src='/logo-round.svg'/>
            <img 
            className={logoPositionInner}           
    
            src='/earth.png'/>



        </>
        
    )

}