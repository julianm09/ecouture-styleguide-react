import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./Sizes";
import { LogoRound } from "./LogoRound";
import { Menu, X } from "react-feather";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const MobileMenuUI = styled.div`
color: white;
font-family: "nunito", sans-serif;
font-size: 24px;
cursor: pointer;
height: 100vh;
width: 100vw;
background: ${colors.blue};
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
padding: 30vh 0;
z-index: 200;
`;

export const MobileMenu = ({ mobileMenu, setMobilemenu }) => {


const [linkto, setLinkto] = useState('')
    
    const handleLink = (e) => {
    
        
      console.log(e.target.innerHTML);
      setMobilemenu(!mobileMenu);
      setLinkto(e.target.innerHTML)
      document.body.style.overflow == "hidden" ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden";
    };
  
    return (
        
<>
        {mobileMenu ? (
            <MobileMenuUI>
              <a href="#logo" onClick={handleLink}>logo</a>
              <a href="#type" onClick={handleLink}>type</a>
              <a href="#colors" onClick={handleLink}>colors</a>
              <a href="#imagery" onClick={handleLink}>imagery</a>
            </MobileMenuUI>
            ) : (
                <></>
            )
        
        } 

        </>
        
          
    )

  };
  