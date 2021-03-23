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
    margin-top: 50px;
    


`
const ColorContainer = styled.div
`
    height: 100vh;
    width: 100vw;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ColorBoxes = styled.div
`

    display: flex;
    width: 80%;
    height: 40%;
    background-color: yellow;
    justify-content: space-between;
    align-items: center;

`
const ColorText = styled.div
`
    display: flex;
    width: 80%;
    height: 50%;
    background-color: blue;
`

const CyanBox = styled.div
`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${colors.cyan};
    border-radius: 10px;
`

const PurpleBox = styled.div
`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${colors.purple};
    border-radius: 10px;
`

const BlueBox = styled.div
`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${colors.blue};
    border-radius: 10px;
`
const OrangeBox = styled.div
`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${colors.orange};
    border-radius: 10px;
`
const BlackBox = styled.div
`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${colors.black};
    border-radius: 10px;
`

const GreenBox = styled.div
`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${colors.green};
    border-radius: 10px;
`

export const ColorPage = () => {



    return (

        <Container id="colors">

            <Content>
            <Title>
                Colors
            </Title>

            
            <ColorContainer>
                <ColorBoxes>
                    <CyanBox></CyanBox>
                    <PurpleBox></PurpleBox>
                    <BlueBox></BlueBox>
                    <OrangeBox></OrangeBox>
                    <BlackBox></BlackBox>
                    <GreenBox></GreenBox>
                </ColorBoxes>

                <ColorText>
                
                </ColorText>
            </ColorContainer>



            </Content>
        </Container>

    )

}