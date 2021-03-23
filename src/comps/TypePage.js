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
    flex-direction: column;


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

    
    font-size: 24px;
    font-weight: 700;
    color: ${colors.blue};
    position: absolute;
    left: 0;
    top: 200px;
    
`

const Greenback = styled.div`

    background-color: ${colors.green};
    width: 100%;
    height: 300vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;

`

const Montfont = styled.h1`

    font-family: 'Montserrat Alternates', sans-serif;
    color: white;
    font-size: 50px;
    margin-top: 0px;
    margin-bottom: 0px;

`
const Smalltext = styled.h4`

    font-family: 'Montserrat Alternates', sans-serif;
    color: white;
    margin-top: 5px

`
const Smallpara = styled.div`

    font-family: 'Montserrat Alternates', sans-serif;
    color: white;
    margin-top: 140px

`

const Lefttext = styled.div`

    margin-right: 400px
    
`

const Sizebox1 = styled.div`

    background-color: white;
    color: ${colors.green};
    height: 100px;
    width: 100px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: bold;
    font-family: nunito, sans-serif;
`

const Sizebox2 = styled.div`

    background-color: ${colors.green};
    border: 1px solid white;
    color: white;
    height: 100px;
    width: 100px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: bold;
    font-family: nunito, sans-serif;
`

const Righttext = styled.div`
`

const Break = styled.br`
`

const Tabs = styled.div `
    display: flex
`

const SelectedTab = styled.div`

    font-family: nunito, sans-serif;
    color: white;
    background-color: ${colors.green};
    height: 60px;
    width: 300px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;

`

const UnselectedTab = styled.div `

    font-family: nunito, sans-serif;
    color: ${colors.green};
    background-color: white;
    height: 60px;
    width: 300px;
    border: 1px ${colors.green} solid;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;

`

export const TypePage = () => {

const [font, setFont] = useState(fontOne)

    return (

        <Container id="type">

            <Content>
                <Title>
                    Typography
                </Title>
            </Content>
            <Tabs>
            <SelectedTab>Montserrat Alternates</SelectedTab>
            <UnselectedTab>Nunito Sans</UnselectedTab>
            <UnselectedTab>Open Sans</UnselectedTab>
            </Tabs>
            <Greenback>
                <Lefttext>
                    <Montfont>
                        Monsterrat Alternates
                    </Montfont>
                    <Smalltext>
                        semibold
                    </Smalltext>
                    <Smallpara>
                        Montserrat Alt. will be used for material names and button text in 36px and 18px.
                    <Break></Break>
                        <Break></Break>
                    Large and rounded Montserrat Alt. provides a sense of professionallism while
                    <Break></Break>
                    still holding a sense of uniqness.
                    </Smallpara>
                </Lefttext>
                <Righttext>
                    <Sizebox1>36px</Sizebox1>
                    <Sizebox2>18px</Sizebox2>
                </Righttext>

            </Greenback>





        </Container>

    )

}