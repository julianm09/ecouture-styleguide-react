import styled from "styled-components";
import { colors } from "./Colors";
import { device } from "./Sizes";
import { LogoRound } from "./LogoRound";
import React, { useState } from "react";

const Container = styled.div`


    width: 100vw;
    display: flex;
    align-items: center;
    transition: 0.2s ease;
    justify-content: center;
    flex-direction: column;

 


`

const Content = styled.div`

    width: 80vw;

    display: flex;
    align-items: left;
    justify-content: left;
    font-family: nunito, sans-serif;
    position: relative;

`

const Title = styled.div`

    
    font-size: 24px;
    font-weight: 700;
    color: ${colors.blue};
    margin: 100px 0;


    
`

const Greenback = styled.div`

    background-color: ${colors.green};
    width: 100%;
    
    justify-content: center;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    padding: 100px 0 ;


`

const Montfont = styled.h1`

    font-family: 'Montserrat Alternates', sans-serif;
    color: white;
    font-size: 50px;
    margin-top: 0px;
    margin-bottom: 0px;

`
const Smalltext = styled.h4`

    font-family: 'Montserrat Alternates', sans-serif;
    color: white;
    margin-top: 5px

`
const Smallpara = styled.div`

    font-family: 'Montserrat Alternates', sans-serif;
    color: white;
    margin-top: 140px;
    width: 50vw;
`

const Lefttext = styled.div`

  
    
`

const Sizebox = styled.div`

    background-color: white;
    color: ${colors.green};
    height: 100px;
    width: 100px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: bold;
    font-family: nunito, sans-serif;
    border: 1px solid white;
    cursor: pointer;
`



const Righttext = styled.div`
`

const Break = styled.br`
`

const Tabs = styled.div `
    display: flex;
    width: 80vw;
    
`

const SelectedTab = styled.div`

    font-family: nunito, sans-serif;
    color: white;
    background-color: ${colors.green};
    border: 1px ${colors.green} solid;
    height: 60px;
 
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;
    cursor: pointer;
    flex-grow: 1;

`

const ContainerUI = styled.div`

width: 80vw;
display: flex;
justify-content: space-between;

`

const UnselectedTab = styled.div `

    font-family: nunito, sans-serif;
    color: ${colors.green};
    background-color: white;
    height: 60px;
    
    border: 1px ${colors.green} solid;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;
    cursor: pointer;
    flex-grow: 1;

`

export const TypePage = () => {

const fontOne = {
    key: 1,
    title:'Montserrat Alternates',
    title2:'semibold',
    textsize1:'36px',
    textsize2:'18px',
    paragraph: 'Montserrat Alt. will be used for material names and button text in 36px and 18px.',
    paragraph2: 'Large and rounded Montserrat Alt. provides a sense of professionallism while still holding a sense of uniqueness.',
    sizes: ['36px', '18px'],
}

const fontTwo = {
    key: 2,
    title:'Nunito',
    title2:'bold',
    textsize1:'36px',
    textsize2:'24px',
    paragraph:'Nunito bold will be used for headings in 36px and 24px.',
    paragraph2:'This font choice was inspired by the slender typography found on fashion websites.',
    sizes:['36px', '24px'],
}

const fontThree = {
    key: 3,
    title:'Open Sans',
    title2:'regular',
    textsize1:'18px',
    textsize2:'12px',
    paragraph: 'Open Sans will be used for material information in 18px and 12xp.',
    paragraph2: ' A classic font, compact legible and perfect for larger bodies of text.',
    sizes:['18px', '12px'],
}


const [font, setFont] = useState(fontOne)
const [fontSize, setFontSize] = useState(font.sizes[0])

    return (

        <Container id="type">

            <Content>
                <Title>
                    Typography
                </Title>



            </Content>

            <Tabs>
            <SelectedTab onClick={() => setFont(fontOne)} style={{
            background: font.key == 1 ? colors.green : "white",
            color: font.key == 1 ? "white" : colors.green}}>
                Montserrat Alternates</SelectedTab>
            <UnselectedTab onClick={() => setFont(fontTwo)} style={{
            background: font.key == 2 ? colors.green : "white",
            color: font.key == 2 ? "white" : colors.green}}>
                Nunito</UnselectedTab>
            <UnselectedTab onClick={() => setFont(fontThree)} style={{
            background: font.key == 3 ? colors.green : "white",
            color: font.key == 3 ? "white" : colors.green}}>
                Open Sans</UnselectedTab>
            </Tabs>


            <Greenback>
              <ContainerUI>

                <Lefttext>
                    <Montfont style = {{fontFamily: font.key == 1 ? "'Montserrat Alternates', sans-serif" : font.key == 2 ? "'Nunito', sans-serif" : "'Open Sans', sans-serif"}}>
                        {font.title}
                    </Montfont>
                    <Smalltext style = {{fontFamily: font.key == 1 ? "'Montserrat Alternates', sans-serif" : font.key == 2 ? "'Nunito', sans-serif" : "'Open Sans', sans-serif"}}>
                        {font.title2}
                    </Smalltext>
                    <Smallpara style = {{fontSize:fontSize, fontFamily: font.key == 1 ? "'Montserrat Alternates', sans-serif" : font.key == 2 ? "'Nunito', sans-serif" : "'Open Sans', sans-serif"}}>
                        {font.paragraph}
                        <Break></Break>
                        <Break></Break>
                        {font.paragraph2}
                    </Smallpara>
                </Lefttext>
                <Righttext>
                    <Sizebox onClick={() => setFontSize(font.sizes[0])} style={{
                    background: fontSize == font.sizes[0] ? "white" : colors.green,
                    color: fontSize == font.sizes[0] ? colors.green : "white"}}>
                        {font.textsize1}</Sizebox>
                    <Sizebox onClick={() => setFontSize(font.sizes[1])} style={{
                    background: fontSize == font.sizes[1] ? "white" : colors.green,
                    color: fontSize == font.sizes[1] ? colors.green : "white"}}>
                        {font.textsize2}</Sizebox>
                </Righttext>
                </ContainerUI>

            </Greenback>

        </Container>

    )

}

