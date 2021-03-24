import styled from 'styled-components';
import { colors } from './Colors';
import { device } from './Sizes';
import { LogoRound } from './LogoRound';
import React, { useState } from 'react';
import { IconographyPage } from './IconographyPage'

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
    justify-content: space-between;
    font-family: nunito, sans-serif;
    padding: 100px 0 0 0;
    position: relative;
    flex-direction: column;





`

const Title = styled.div`

    font-family: nunito, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${colors.blue};

    
    


`

const Square = styled.img`

    background-color: #51B27E;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;


    @media ${device.tablet}{
        width: 80vw;
    

    }
`

const SquareDiv = styled.div`


    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;


    @media ${device.tablet}{
        width: 80vw;
    

    }
`

const BoxContainer = styled.div`



    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 100px 0;

   
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


export const ImageryPage = () => {



    return (

        <Container id="imagery">

            <Content>
            <Title>
                Imagery
            </Title>

        <BoxContainer>

        <Square src="/ad-1.png">
      
      
        </Square>

        <Square src="/ad-2.png">
       
      
        </Square>

        <Square src="/ad-3.png">
       
      
        </Square>

        <Square src="/ad-4.png">
       

        </Square>

        </BoxContainer>
        

        <Title>
                Icons
            </Title>

            <BoxContainer>

        <SquareDiv>

        <Icon>
        <img src='/cotton-btn.svg'></img>
        <strong style={{color: colors.cyan}}>Cotton</strong>
        </Icon>

            


        </SquareDiv>

        <SquareDiv>

        <Icon>
        <img src='/plant-btn.svg'></img>
        <strong style={{color: colors.green}}>Plant</strong>
        </Icon>

            
        </SquareDiv>

        <SquareDiv>

        <Icon>
        <img src='/animal-btn.svg'></img>
        <strong style={{color: colors.orange}}>Animal</strong>
        </Icon>

                    
        </SquareDiv>

        <SquareDiv>


        <Icon>
        <img src='/synthetic-btn.svg'></img>
        <strong style={{color: colors.purple}}>Synthetic</strong>
        </Icon>


                    
        </SquareDiv>

        

        </BoxContainer>



            </Content>
        </Container>

    )

}