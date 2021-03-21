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
    transition: 0.5s ease;
    justify-content: center;


`

const Content = styled.div`

    width: 80vw;
    height: 100vh;
    display: flex;
    align-items: left;
    justify-content: center;
    font-family: nunito, sans-serif;
    padding: 200px 0 0 0;
    position: relative;



`

const Title = styled.div`

    font-family: nunito, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${colors.blue};
    position: absolute;
    left: 0;
    top: 200px;
    


`


export const FigmaPage = () => {



    return (

        <Container>

            <Content>
            <Title>
                Figma
            </Title>

            <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)', position: 'absolute', top: '300px'}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEUsyyUMGSooRcBsPrfJxej%2FDesign-Dynamic-Content%3Fnode-id%3D354%253A37" allowfullscreen></iframe>






            </Content>
        </Container>

    )

}