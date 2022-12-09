import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

const MainContainer = styled.div`
background: ${(props) => props.theme.body}
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif;
    font-weight:500;
}

`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1; 
`;

const SHOP = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%)
  text-decoration: none;
  z-index: 1; 
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
{/* need emerie's email */}
        <Contact target="_blank" to={{pathname:"mailto:emeriedblume@gmail.com"}}>
<h3>Say Hi...</h3>
        </Contact>
        <SHOP to="/shop">
<h3>Shop</h3>
        </SHOP>

      </Container>
    </MainContainer>
  );
};

export default Main;
