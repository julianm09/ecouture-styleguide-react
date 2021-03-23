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
  padding: 200px 0 0 0;
  position: relative;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: nunito, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${colors.blue};
  position: absolute;
  left: 0;
  top: 200px;
`;

const TabUI = styled.div`
  width: 100px;
  height: 50px;

  margin: 10px;
  border: 1px solid ${colors.green};
`;

const FontUI = styled.div`
  width: 100px;
  height: 50px;
  background: blue;
  margin: 10px;
`;

export const TypePage = () => {
  const fontOne = {
    key: 1,
    title: "montserrat",
    paragraph: "montserrat is for...",
    sizes: ["26px", "48px"],
  };

  const fontTwo = {
    key: 2,
    title: "nunito",
    paragraph: "nunito is for...",
    sizes: ["18px", "36px"],
  };

  const fontThree = {
    key: 3,
    title: "open sans",
    paragraph: "open sans is for...",
    sizes: ["12px", "39px"],
  };

  const [font, setFont] = useState(fontOne);
  const [fontSize, setFontSize] = useState("16px");

  return (
    <Container id="type">
      <Content>
        <Title>Typography</Title>

        <TabUI
          onClick={() => setFont(fontOne)}
          style={{
            background: font.key == 1 ? colors.green : "white",
            color: font.key == 1 ? "white" : colors.green
          }}
        >
          font-1
        </TabUI>
        <TabUI
          onClick={() => setFont(fontTwo)}
          style={{
            background: font.key == 2 ? colors.green: "white",
            color: font.key == 2 ? "white" : colors.green
          }}
        >
          font-2
        </TabUI>
        <TabUI
          onClick={() => setFont(fontThree)}
          style={{
            background: font.key == 3 ? colors.green : "white",
            color: font.key == 3 ? "white" : colors.green
          }}
        >
          font-3
        </TabUI>

        <FontUI
        style={{
          background: fontSize == font.sizes[0] ? 'white' : colors.green,
          color: fontSize == font.sizes[0] ? colors.green : 'white'
        }}
         onClick={() => setFontSize(font.sizes[0])}>
          {font.sizes[0]}
        </FontUI>

        <FontUI 
        style={{
          background: fontSize == font.sizes[1] ? 'white' : colors.green,
          color: fontSize == font.sizes[1] ? colors.green : 'white'
        }}
        onClick={() => setFontSize(font.sizes[1])}>
          {font.sizes[1]}
        </FontUI>

        <div
        style={{ 
            fontFamily: font.key == 1 ? "'Montserrat Alternates', sans-serif" : font.key == 2 ? "'Nunito', sans-serif" : "'Open Sans', sans-serif"
        }}
        >{font.title}</div>

        <div style={{ 
        fontSize: fontSize,
        fontFamily: font.key == 1 ? "'Montserrat Alternates', sans-serif" : font.key == 2 ? "'Nunito', sans-serif" : "'Open Sans', sans-serif"
        }}>{font.paragraph}</div>
      </Content>
    </Container>
  );
};
