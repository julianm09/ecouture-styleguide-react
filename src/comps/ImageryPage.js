import styled from 'styled-components';
import { colors } from './Colors'
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


export const ImageryPage = () => {



    return (

        <Container>

            <Content>
            <Title>
                Imagery
            </Title>






            </Content>
        </Container>

    )

}