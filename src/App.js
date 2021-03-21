import { Header } from './comps/Header';
import { LandingPage } from './comps/Landing';
import { LogoPage } from './comps/LogoPage';
import { TypePage } from './comps/TypePage';
import { ColorPage } from './comps/ColorPage'
import { ImageryPage } from './comps/ImageryPage';
import { IconographyPage } from './comps/IconographyPage';
import { FigmaPage } from './comps/FigmaPage';
import { Footer } from './comps/Footer';
import { Cursor } from './comps/Cursor';
import { MobileMenu } from './comps/MobileMenu';
import { colors } from './comps/Colors';
import React, { useState, useEffect } from 'react'


function App() {

  const [logoPosition, setLogoPosition] = useState('hero');
  const [logoPositionInner, setLogoPositionInner] = useState('hero-round');

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const [scrollColor, setScrollColor] = useState(colors.green);

  const [mobileMenu, setMobilemenu] = useState(false);
  

  useEffect(() => {


    
    if(scrollTop > 100){
          setLogoPosition('corner')
          setLogoPositionInner('corner-round')

        } else {
          setLogoPosition('hero')
          setLogoPositionInner('hero-round')

      }
      const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);

     

      };
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);




  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          setScrollColor('white')
      } else {
          setScrollColor(colors.green)

      }
  })

  
  return (
    <div style={{background: scrollColor, transition: '0.5s ease'}}>


      <MobileMenu mobileMenu={mobileMenu} setMobilemenu={setMobilemenu}></MobileMenu>
      <Header mobileMenu={mobileMenu} setMobilemenu={setMobilemenu}></Header>
      <LandingPage logoPosition={logoPosition} setLogoPosition={setLogoPosition} setLogoPositionInner={setLogoPositionInner} logoPositionInner={logoPositionInner} mobileMenu={mobileMenu} setMobilemenu={setMobilemenu}></LandingPage>
      <LogoPage ></LogoPage>
      <TypePage></TypePage>
      <ColorPage></ColorPage>
      <ImageryPage></ImageryPage>
      <IconographyPage></IconographyPage>
      <FigmaPage></FigmaPage>
      <Footer></Footer>


    </div>
  );
}

export default App;
