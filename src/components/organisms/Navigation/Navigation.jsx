import React from 'react';
import { Nav, NavTitle, LinksWrapper, StyledLink } from './Navigation.styles';

const Navigation = ({ isLong }) => {
  return (
    <Nav isLong={isLong}>
      <NavTitle>Study Buddy</NavTitle>
      <LinksWrapper>
        <StyledLink to="/group" exact>
          Dashboard
        </StyledLink>
        <StyledLink to="/add-user">Add user</StyledLink>
        <StyledLink as="a" onClick={() => localStorage.removeItem('token')}>
          Logout
        </StyledLink>
      </LinksWrapper>
    </Nav>
  );
};

export default Navigation;
