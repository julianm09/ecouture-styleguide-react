import styled from 'styled-components';
import { colors } from './Colors'
import { LogoRound } from './LogoRound';
import React, { useState } from 'react';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    transition: 0.2s ease;
    justify-content: center;


`


export const LandingPage = () => {




    return (

        <Container>

            <LogoRound></LogoRound>

        </Container>

    )

}