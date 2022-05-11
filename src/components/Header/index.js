import React from 'react';
import { NavLink } from 'react-router-dom';
import { UilSignout, UilUserSquare } from '@iconscout/react-unicons';

import styles from './style';
import Logo from '../Icons/Logo';

const {StyledHeader, Container, StyledLogo, Nav} = styles;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo to="/">
          <Logo/>DevCamper
        </StyledLogo>
        <Nav>
          <NavLink to='login' className={({isActive}) => (isActive ? 'active' : '')}>
            <UilSignout/> Login
          </NavLink>
          <NavLink to='register'><UilUserSquare/>Register</NavLink>
          <NavLink to='bootCamps'>Browse Bootcamps</NavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
