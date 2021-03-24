import styled from 'styled-components';
import { colors } from './Colors';
import { device } from './Sizes';
import { LogoRound } from './LogoRound';

import React, { useState } from 'react';

const Container = styled.div`

    width: 100vw;

    display: flex;
    align-items: flex-start;
    transition: 0.5s ease;
    justify-content: center;
    padding: 0 0 100px 0;


`

const Content = styled.div`

    width: 80vw;
    display: flex;
    align-items: left;
    justify-content: center;
    font-family: nunito, sans-serif;
    position: relative;
    flex-direction: column;




`

const Title = styled.div`

    font-family: nunito, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${colors.blue};
    display: flex;
    width: 80vw;
    padding: 100px 0;



`


export const FigmaPage = () => {



    return (

        <Container>

            <Content>
            <Title>
            Prototype
            </Title>

            <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)', top: '300px', width: '80vw', height: '60vh'}}  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEUsyyUMGSooRcBsPrfJxej%2FDesign-Dynamic-Content%3Fnode-id%3D354%253A37" allowfullscreen></iframe>






            </Content>
        </Container>

    )

}