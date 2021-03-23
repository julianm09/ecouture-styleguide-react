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

const Icon = styled.div`

    height: 100px;
    width: 100px;
    border-radius: 7px;
    background-color: #FFFFFF;
    box-shadow: 0 4px 4px 2px rgba(0,0,0,0.4);
    margin-left: 2vw;
    margin-right: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`

const BoxContainer = styled.div`

    display: flex;
    justify-content: space-out;
    align-items: center;
    flex-wrap: no-wrap;
    

`

export const IconographyPage = () => {



    return (

        <Container>

            <Content>
            <Title>
                Iconography
            </Title>

        <BoxContainer>

        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>

        </BoxContainer>




            </Content>
        </Container>

    )

}