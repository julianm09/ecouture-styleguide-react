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
    padding: 300px 0 0 0;
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

const Square = styled.img`

    background-color: #51B27E;
    min-width: 400px;
    min-height: 300px;
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
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

   
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



            </Content>
        </Container>

    )

}