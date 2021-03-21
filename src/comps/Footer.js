import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./Sizes";
import { LogoRound } from "./LogoRound";
import { Menu, X, Copy } from "react-feather";
import React, { useState } from "react";
import '../global.css'

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;

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
  height: 80vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
`;



const FooterLink = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Montserrat Alternates", sans-serif;
  flex-direction: column;


`;


const Banner = styled.div`
  width: 200vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  
  font-family: "Montserrat Alternates", sans-serif;
  top: 0px;
  


`;




export const Footer = ({ mobileMenu, setMobilemenu }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setMobilemenu(!mobileMenu);
    document.body.style.overflow == "hidden" ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"
  };

  return (
    <HeaderContainer style={{background : mobileMenu ? colors.blue : colors.green, filter : mobileMenu ? 'none': 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
        <HeaderLinkContainer>
        
   
        <div></div>

        <FooterLink>
        <p style={{color: 'white', position: "relative", top: '200px'}}>see our <a style={{color: colors.blue, fontWeight:'bold'}}  target="_blank" href="https://taigomayes.github.io/ecouture-infographic/">infographic</a></p>

        <img width="100px" src="/earth.gif"></img>
        </FooterLink>
        
        
        <p style={{color: 'white'}}> &copy; 2021 ecouture</p>
        </HeaderLinkContainer>
    </HeaderContainer>
  );
};
