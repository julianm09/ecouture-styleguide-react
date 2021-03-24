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
`;

const Content = styled.div`

    width: 80vw;
    height: 100vh;
    display: flex;
    align-items: left;
    justify-content: center;
    font-family: nunito, sans-serif;
    position: relative;

    flex-direction: column;
`;

const Title = styled.div`

    font-family: nunito, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${colors.blue};

`;

const ContentContainer = styled.div`

    width: 100%;
    display: flex;
    margin 50px 0;

    @media ${device.tablet}{
        flex-wrap: wrap;
    }
`;

const InformationContainer = styled.div`

    width: 50%;

    @media ${device.tablet} {
        width: 80vw;
    }
`;

const LogoContainer = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  @media ${device.tablet} {
    width: 80vw;
  }
`;

const LogoTitle = styled.div`

    color: #3884FF;
    font-size: 22px;
   
`;

const LogoParagraph = styled.div`

    margin-top: 25px;
    color: black;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    
`;

const ButtonContainer = styled.div`

    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const ButtonUI = styled.div`

    width: 24px;
    height: 24px;
    border-radius: 50px;
    background: white;
    margin: 0 25px;
    transition: 0.5s;
    cursor: pointer;
`;

const ImageContainer = styled.div`

    display: flex;  
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
`;

export const LogoPage = () => {

    const [logoOne, setLogoOne] = useState(false);
    const [logoTwo, setLogoTwo] = useState(false);
    const [logoThree, setLogoThree] = useState(false);

    return (
        <Container id="logo">
            <Content>
                <Title>Logo</Title>

                <ContentContainer>
                    <InformationContainer>
                        <LogoTitle>Wordmark</LogoTitle>
                        <LogoParagraph>
                            Our wordmark is comprised of two key elements. First the name “ecouture” spelt in all lower-case letters in the sans serif font “Montserrat Alternates”. Second it features our earth icon in place of the “o” in “ecouture” The color version of the wordmark uses #51B27E.
                            </LogoParagraph>
                    </InformationContainer>

                    <LogoContainer>
                        <ImageContainer>
                            {logoOne ? (
                                <img width="250px" src="/wordmark-bw.png"></img>
                            ) : (
                                <img width="250px" src="/wordmark-color.png"></img>
                            )}
                        </ImageContainer>

                        <ButtonContainer>
                            <ButtonUI onClick={() => setLogoOne(true)} style={{ background: logoOne ? 'black' : 'white', border: logoOne ? 'none' : '1px solid black', }}></ButtonUI>
                            <ButtonUI onClick={() => setLogoOne(false)} style={{ background: logoOne ? 'white' : '#51B27E', border: logoOne ? '1px solid #51B27E' : 'none' }}></ButtonUI>
                        </ButtonContainer>

                    </LogoContainer>
                </ContentContainer>

                <ContentContainer>
                    <InformationContainer>
                        <LogoTitle>Combination Mark</LogoTitle>
                        <LogoParagraph>
                            Our combination mark repeats the ecouture name three times to form a circle similar to that of the recycling logo. This is done to express the value ecouture puts in “Reduce, Reuse, Recycle”. The ecouture name is spelt in all lowercase letters and uses the sans serif font “Montserrat Alternates” In the center is the earth icon.
                            </LogoParagraph>
                    </InformationContainer>

                    <LogoContainer>
                        <ImageContainer>
                            {logoTwo ? (
                                <img width="175px" src="/combination-bw.png"></img>
                            ) : (
                                <img width="175px" src="/combination-color.png"></img>
                            )}
                        </ImageContainer>

                        <ButtonContainer>
                            <ButtonUI onClick={() => setLogoTwo(true)} style={{ background: logoTwo ? 'black' : 'white', border: logoTwo ? 'none' : '1px solid black', }}></ButtonUI>
                            <ButtonUI onClick={() => setLogoTwo(false)} style={{ background: logoTwo ? 'white' : '#51B27E', border: logoTwo ? '1px solid #51B27E' : 'none' }}></ButtonUI>
                        </ButtonContainer>
                    </LogoContainer>
                </ContentContainer>

                <ContentContainer>
                    <InformationContainer>
                        <LogoTitle>Pictorial Mark</LogoTitle>
                        <LogoParagraph>
                            Our pictoral mark is the simplest of our logo variations. It consists of a single icon of the earth. The icon uses #1D498B for the water and #3D7E5C for the land to give contrast to the lighter greens and blues used throughout our styling.
                            </LogoParagraph>
                    </InformationContainer>

                    <LogoContainer>
                        <ImageContainer>
                            {logoThree ? (
                                <img width="125px" src="/earth.gif"></img>
                            ) : (
                                <img width="125px" src="/earth.png"></img>
                            )}
                        </ImageContainer>

                        <ButtonContainer>
                            <ButtonUI onClick={() => setLogoThree(!logoThree)}>{logoThree ? "Stop" : "Spin!"}</ButtonUI>
                        </ButtonContainer>
                    </LogoContainer>
                </ContentContainer>
            </Content>
        </Container>
    );
};
