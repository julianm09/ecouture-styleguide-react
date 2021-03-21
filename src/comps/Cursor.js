import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./Sizes";
import { LogoRound } from "./LogoRound";
import { Menu, X, Copy } from "react-feather";
import React, { useState, useEffect } from "react";

const CursorUI = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 1000;
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%)

`;

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log(position)
    
    }
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};




export const Cursor = ({ mobileMenu, setMobilemenu }) => {


  console.log(useMousePosition());
  

  return (
    <CursorUI>

    </CursorUI>
  );
};
