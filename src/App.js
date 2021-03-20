import { Header } from './comps/Header';
import { LandingPage } from './comps/Landing';
import { LogoPage } from './comps/LogoPage';
import { TypePage } from './comps/TypePage';
import { ColorPage } from './comps/ColorPage'
import { ImageryPage } from './comps/ImageryPage';
import { IconographyPage } from './comps/IconographyPage';
import { FigmaPage } from './comps/FigmaPage';
import { colors } from './comps/Colors';
import React, { useState } from 'react'

function App() {


  const [scrollColor, setScrollColor] = useState(colors.green);
  

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          setScrollColor('white')
      } else {
          setScrollColor(colors.green)

      }
  })

  
  return (
    <div style={{background: scrollColor, transition: '0.5s ease'}}>

      <Header></Header>
      <LandingPage></LandingPage>
      <LogoPage></LogoPage>
      <TypePage></TypePage>
      <ColorPage></ColorPage>
      <ImageryPage></ImageryPage>
      <IconographyPage></IconographyPage>
      <FigmaPage></FigmaPage>
      


    </div>
  );
}

export default App;
