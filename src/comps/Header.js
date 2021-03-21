import styled from 'styled-components';
import { colors } from './Colors';
import { device } from './Sizes';
import { LogoRound } from './LogoRound';



const HeaderContainer = styled.div`

width: 100vw; 
height: 100px;
position: fixed;
top: 0;
background: ${colors.green};
display: flex; 
justify-content: center;
align-items: center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
z-index: 300;

`

const HeaderLinkContainer = styled.div`


width: 80vw;
display: flex;
justify-content: flex-end;


`

const HeaderLinks = styled.div`


width: 30vw;
display: flex;
justify-content: space-between;
color: white;
font-family: 'Montserrat Alternates', sans-serif;


`

export const Header = () => {

    return(
        <HeaderContainer>

      
        <HeaderLinkContainer>
            <HeaderLinks>

                <a>logo</a>
                <a>type</a>
                <a>colors</a>
                <a> imagery</a>

            </HeaderLinks>

            </HeaderLinkContainer>


        </HeaderContainer>
    )

}