import styled from 'styled-components';
import { colors } from './Colors';
import { device } from './Sizes';
import { LogoRound } from './LogoRound';

import React, { useState } from 'react';

const Container = styled.div`

    width: 100vw;
    display: flex;
    align-items: center;
    transition: 0.5s ease;
    justify-content: center;


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
    padding: 100px 0 ;

    


`

const Icon = styled.div`

    height: 100px;
    width: 100px;
    border-radius: 7px;
    background-color: #FFFFFF;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`

const BoxContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    

`

export const IconographyPage = () => {



    return (

        <Container>

            <Content>


        <BoxContainer>

        <Icon>
        <img src='/cotton-btn.svg'></img>
        <strong style={{color: colors.cyan}}>Cotton</strong>
        </Icon>


        <Icon>
        <img src='/plant-btn.svg'></img>
        <strong style={{color: colors.green}}>Plant</strong>
        </Icon>


        <Icon>
        <img src='/animal-btn.svg'></img>
        <strong style={{color: colors.orange}}>Animal</strong>
        </Icon>


        <Icon>
        <img src='/synthetic-btn.svg'></img>
        <strong style={{color: colors.purple}}>Synthetic</strong>
        </Icon>

        </BoxContainer>
            </Content>
        </Container>

    )

}