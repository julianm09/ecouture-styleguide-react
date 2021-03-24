import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./Sizes";
import { LogoRound } from "./LogoRound";
import { Menu, X } from "react-feather";
import React, { useState } from "react";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 500;
`;

const HeaderLinkContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: flex-end;
`;

const HeaderLinks = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  color: white;
  font-family: "Montserrat Alternates", sans-serif;

  @media ${device.tablet} {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  color: white;

  font-family: "Montserrat Alternates", sans-serif;
  cursor: pointer;
  z-index: 500;

  @media ${device.tablet} {
    display: flex;
  }
`;



export const Header = ({ mobileMenu, setMobilemenu }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setMobilemenu(!mobileMenu);
    document.body.style.overflow == "hidden" ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"
  };

  return (
    <HeaderContainer style={{background : mobileMenu ? colors.blue : colors.green, filter : mobileMenu ? 'none': 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
      <HeaderLinkContainer >

        <HeaderLinks>
          <a href='#logo'>logo</a>
          <a href='#type'>type</a>
          <a href='#colors'>colors</a>
          <a href='#imagery'> imagery</a>
        </HeaderLinks>

        <Hamburger onClick={handleClick}>
          {mobileMenu ? (
            <X color="white" size={24} />
          ) : (
            <Menu color="white" size={24} />
          )}
        </Hamburger>
      </HeaderLinkContainer>
    </HeaderContainer>
  );
};
