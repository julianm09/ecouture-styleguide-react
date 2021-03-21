import styled from 'styled-components';
import { colors } from './Colors';
import { device } from './Sizes';
import { LogoRound } from './LogoRound';
import React, { useState } from 'react';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    transition: 0.2s ease;
    justify-content: center;
    z-index: 300;


`


export const LandingPage = ({mobileMenu, setMobilemenu, logoPosition, logoPositionInner}) => {




    return (

        <Container>

            <LogoRound logoPosition={logoPosition} logoPositionInner={logoPositionInner} mobileMenu={mobileMenu} setMobilemenu={setMobilemenu}></LogoRound>

        </Container>

    )

}