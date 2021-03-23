import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./Sizes";
import { LogoRound } from "./LogoRound";
import React, { useState } from "react";

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

const ContentContainer = styled.div`

    width: 100%;
    background: red;
    display: flex;
    margin 50px 0;

    @media ${device.tablet}{
        flex-wrap: wrap;
    }
`


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
`;

const ImageContainer = styled.div`

    display: flex;  
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
`;


const InformationContainer = styled.div`
  width: 50%;
  background: blue;

  @media ${device.tablet} {
    width: 80vw;
  }
`;

const LogoContainer = styled.div`
  width: 50%;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    width: 80vw;
  }
`;

const LogoTitle = styled.div`
  color: white;
  font-size: 24px;
  background: red;
`;

const LogoParagraph = styled.div`
  color: white;
  font-size: 18px;
  background: red;
`;

const ButtonContainer = styled.div`
  background: grey;
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
`;

const ImageContainer = styled.div`

display: flex;  
justify-content: center;
align-items: center;
background: red
width: 100%;
height: 100%;

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
            <LogoTitle>Icon Logo</LogoTitle>
            <LogoParagraph>
              Our combination mark repeats the ecouture name three times to form
              a circle similar to that of the recycling logo. This is done to
              express the value ecouture puts in “Reduce, Reuse, Recyle”. The
              ecouture name is spelt in all lowercase letters and uses the sans
              serif font “Montserrat Alternates” In the center is the earth
              icon.
            </LogoParagraph>
          </InformationContainer>

          <LogoContainer>
            <ImageContainer>
              {logoOne ? (
                <img width="100px" src="/earth.png"></img>
              ) : (
                <img width="100px" src="/earth.gif"></img>
              )}
            </ImageContainer>

            <ButtonContainer>
              <ButtonUI onClick={() => setLogoOne(true)} style={{ background: logoOne ? 'black' :'green'}}></ButtonUI>
              <ButtonUI onClick={() => setLogoOne(false)} style={{ background: logoOne ? 'green' :'black'}}></ButtonUI>
            </ButtonContainer>
          </LogoContainer>
        </ContentContainer>

        <ContentContainer>
          <InformationContainer>
            <LogoTitle>Icon Logo</LogoTitle>
            <LogoParagraph>
              Our combination mark repeats the ecouture name three times to form
              a circle similar to that of the recycling logo. This is done to
              express the value ecouture puts in “Reduce, Reuse, Recyle”. The
              ecouture name is spelt in all lowercase letters and uses the sans
              serif font “Montserrat Alternates” In the center is the earth
              icon.
            </LogoParagraph>
          </InformationContainer>

          <LogoContainer>
            <ImageContainer>
              {logoTwo ? (
                <img width="100px" src="/earth.png"></img>
              ) : (
                <img width="100px" src="/earth.gif"></img>
              )}
            </ImageContainer>

            <ButtonContainer>
              <ButtonUI onClick={() => setLogoTwo(true)} style={{ background: logoOne ? 'black' :'green'}}></ButtonUI>
              <ButtonUI onClick={() => setLogoOne(false)} style={{ background: logoOne ? 'green' :'black'}}></ButtonUI>
            </ButtonContainer>
          </LogoContainer>
        </ContentContainer>

        <ContentContainer>
          <InformationContainer>
            <LogoTitle>Icon Logo</LogoTitle>
            <LogoParagraph>
              Our combination mark repeats the ecouture name three times to form
              a circle similar to that of the recycling logo. This is done to
              express the value ecouture puts in “Reduce, Reuse, Recyle”. The
              ecouture name is spelt in all lowercase letters and uses the sans
              serif font “Montserrat Alternates” In the center is the earth
              icon.
            </LogoParagraph>
          </InformationContainer>

          <LogoContainer>
            <ImageContainer>
              {logoThree ? (
                <img width="100px" src="/earth.png"></img>
              ) : (
                <img width="100px" src="/earth.gif"></img>
              )}
            </ImageContainer>

            <ButtonContainer>
              <div onClick={() => setLogoThree(!logoThree)}>{logoThree ? "spin" : "stop"}</div>
            </ButtonContainer>
          </LogoContainer>
        </ContentContainer>
      </Content>
    </Container>
  );

};
