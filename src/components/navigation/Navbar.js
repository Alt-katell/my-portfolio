import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../images/logo.png';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  height: 190px;
  width: 100%;
  padding: 10px 0 5px 0;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  display: block;
  padding: 0 6px;

  &:first-child {
    margin-left: 170px;
  }

  &:last-child {
    margin-right: 170px;
  }

  &:hover {
    color: ${props => props.theme.colors.grey};
  }

  &.active {
    border-left: 4px solid black;
  }
`

const StyledLogo = styled.img`
  width: 230px;
  height: auto;

  @media (max-width: 1024px) {
    height: 80px;
    width: auto;
  }
`

const Navbar = () => {
  return (
    <header>
     <StyledNav>
        <StyledLink to="/" activeClassName="active">About</StyledLink>
        <StyledLink to="/work/" activeClassName="active">Work</StyledLink>

        <StyledLogo src={logo} alt="Logo katell goaër"/>

        <StyledLink to="/journey/" activeClassName="active">Journey</StyledLink>
        <StyledLink to="/contact/" activeClassName="active">Contact</StyledLink>
     </StyledNav>
    </header>
  );
}

export default Navbar;
