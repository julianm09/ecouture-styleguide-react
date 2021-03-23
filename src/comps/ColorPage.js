import styled from 'styled-components';
import { colors } from './Colors';
import { device } from './Sizes';
import { LogoRound } from './LogoRound';
import React, { useState } from 'react';

const Container = styled.div`

    width: 100vw;
    height: 82vh;
    display: flex;
    align-items: center;
    transition: 0.5s ease;
    justify-content: center;
    margin-bottom: -100px;


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
    color: white;
    position: absolute;
    left: 0;
    top: 200px;
    margin-top: 50px;
    


`
const ColorContainer = styled.div
`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ColorBoxes = styled.div
`

    display: flex;
    width: 100%;
    height: 40%;
    background-color: none;
    justify-content: space-between;
    align-items: center;
    

`
const ColorText = styled.div
`
    display: flex;
    width: 100%;
    height: 50%;
    color: white;

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

const CyanTextBox = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

const PurpleTextBox = styled.div
`
display: flex;
    flex-direction: column;
    justify-content: left;
`
const BlueTextBox = styled.div
`
display: flex;
    flex-direction: column;
    justify-content: left;
`
const OrangeTextBox = styled.div
`
display: flex;
    flex-direction: column;
    justify-content: left;
`
const BlackTextBox = styled.div
`
display: flex;
    flex-direction: column;
    justify-content: left;
`
const GreenTextBox = styled.div
`
display: flex;
    flex-direction: column;
    justify-content: left;
`
const ColorName = styled.h1
`
`

const ColorHex = styled.h3
`
`

const ColorRgb = styled.h3
`
    margin-top: -10px;
`

const ColorDesc = styled.div
`

`

export const ColorPage = () => {

    const [color, setColor] = useState(colors.cyan)

    return (

        <Container id="colors"
        style={{
            background: color
        }}>

            <Content>
            <Title>
                Colors
            </Title>

            
            <ColorContainer>
                <ColorBoxes>
                    <CyanBox style={{border: color == colors.cyan ? '2px solid white': 'none'}} onClick={() => setColor(colors.cyan)}></CyanBox>
                    <PurpleBox style={{border: color == colors.purple ? '2px solid white': 'none'}} onClick={() => setColor(colors.purple)}></PurpleBox>
                    <BlueBox style={{border: color == colors.blue ? '2px solid white': 'none'}}  onClick={() => setColor(colors.blue)}></BlueBox>
                    <OrangeBox style={{border: color == colors.orange ? '2px solid white': 'none'}} onClick={() => setColor(colors.orange)}></OrangeBox>
                    <BlackBox style={{border: color == colors.black ? '2px solid white': 'none'}} onClick={() => setColor(colors.black)}></BlackBox>
                    <GreenBox style={{border: color == colors.green ? '2px solid white': 'none'}} onClick={() => setColor(colors.green)}></GreenBox>
                </ColorBoxes>

                <ColorText>


                { 
                color == colors.green ?

                    <GreenTextBox>
                        <ColorName>Eco Green</ColorName>
                        <ColorHex>#51B27E</ColorHex>
                        <ColorRgb>(81, 178, 126)</ColorRgb>
                        <ColorDesc>Eco Green is the main color in our logo, as well as the color for plant fibers.</ColorDesc>
                    </GreenTextBox>



                    : color == colors.purple ?

                    <PurpleTextBox>
                        <ColorName>Pastel Purple</ColorName>
                        <ColorHex>#AF75BD</ColorHex>
                        <ColorRgb>(175, 117, 189)</ColorRgb>
                        <ColorDesc>Pastel Purple will be used for Natural Polymer fabrics.</ColorDesc>
                    </PurpleTextBox>

                    : color == colors.blue?

                    <BlueTextBox>
                        <ColorName>Ocean Blue</ColorName>
                        <ColorHex>#3884FF</ColorHex>
                        <ColorRgb>(56, 132, 255)</ColorRgb>
                        <ColorDesc>Ocean Blue will be used for all navigation buttons.</ColorDesc>
                    </BlueTextBox>

                    : color == colors.orange ?

                    <OrangeTextBox>
                        <ColorName>Scorched Orange</ColorName>
                        <ColorHex>#C2600F</ColorHex>
                        <ColorRgb>(194, 96, 15)</ColorRgb>
                        <ColorDesc>Scorched Orange will be used for Animal Fiber fabrics.</ColorDesc>
                    </OrangeTextBox>

                    : color == colors.black ?

                    <BlackTextBox>
                        <ColorName>Almost Black</ColorName>
                        <ColorHex>#2E2E2E</ColorHex>
                        <ColorRgb>(46, 46, 46)</ColorRgb>
                        <ColorDesc>Almost Black will be used for descriptive text.</ColorDesc>
                    </BlackTextBox>

                    : 

                    <CyanTextBox>
                        <ColorName>Synthetic Cyan</ColorName>
                        <ColorHex>#36B9C5</ColorHex>
                        <ColorRgb>(54, 185, 197)</ColorRgb>
                        <ColorDesc>Synthetic Cyan will be used for Synthetic Polymer fabrics.</ColorDesc>
                    </CyanTextBox>

                }

                    
                </ColorText>
            </ColorContainer>



            </Content>
        </Container>

    )

}