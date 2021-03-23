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
const First = styled.div`
    height: 20vh;
    width: 70vw;
    background-color: 



    
    


`

const LogoType = styled.h3`
    font-family: nunito, sans-serif;
    font-size: 16px;
    color: ${colors.blue};
    position: absolute;
    display: flex;
    justify-content: center;
    top: 225px;
   
    
    


`

const Info = styled.h4`
    margin-top: 65px;
    width: 40vw;
    font-size: 11px;
    font-family: open sans, sans-serif;
    

    
    


`






export const LogoPage = () => {


    return (

        <Container id="logo">

            <Content>
                <Title>
                    Logo
                </Title>

                <First>
                    <LogoType>
                        Wordmark
                    </LogoType>

                    <Info>
                        Our wordmark is comprised of two key elements. First the name “ecouture” spelt in all lower case letters in the sans serif font “Montserrat Alternates”. Second it features our earth icon in place of the “o” in “ecouture” The color version of the wordmark uses #51B27E.

                    </Info>



                </First>










            </Content>




        </Container >

    )

}