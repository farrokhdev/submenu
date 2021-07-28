import React from "react";
import { FaBars } from "react-icons/fa";
import { fonts, colorAndGradiant, padding } from "../variables";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import sublinks from "../data";

const Nav = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 100;
  padding: ${padding.navbarDesktop};

  @media screen and (max-width: 1000px) {
    padding: ${padding.navbarTablet};
  }
  @media screen and (max-width: 500px) {
    padding: ${padding.navbarMobile};
  }
`;
const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  max-width: 850px;
  margin: 0 auto;
`;
const Logo = styled.h1`
  color: ${colorAndGradiant.colors.white};
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px #00000040;
`;
const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  & a {
    color: ${colorAndGradiant.colors.white};
    font-weight: 500;
    letter-spacing: 0.5px;
    padding:10px 0px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
  
`;
const SignIn = styled.button`

  @media screen and (max-width: 700px) {
    display: none;
  }
  
`;
const Toggle = styled(Link)`
  display: none;
  color: ${colorAndGradiant.colors.white};
  padding: 0;
  font-size: ${fonts.p.desktop};
  @media screen and (max-width: 700px) {
    display: flex;
  }
  
`;

const Navbar = () => {
  const { openSidebar,closeSidebar,openSubmenu,closeSubmenu,displaySubmenu} = useGlobalContext();
  const handleSubmenu=(e)=>{
    if(!e.target.classList.contains('main-links')){
      closeSubmenu();
    }
  }

  return (
    <>
      <Nav onMouseOver={handleSubmenu}>
        <NavContainer>
        <Logo>Stripe</Logo>
        <Toggle onClick={openSidebar}><FaBars/></Toggle>
        <NavLinks>
          {sublinks.map((link,index)=>{
            const {page}=link;
            return(
              <>
              <Link key={index} onMouseOver={displaySubmenu} className="main-links">{page}</Link>
              </>
            )
          })}
        </NavLinks>
        <SignIn>Sign in</SignIn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
