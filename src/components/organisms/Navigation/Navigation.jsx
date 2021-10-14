import React from 'react';
import { Nav, NavTitle, LinksWrapper, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <Nav>
      <NavTitle>Study Buddy</NavTitle>
      <LinksWrapper>
        <StyledLink to="/group" exact>
          Dashboard
        </StyledLink>
        <StyledLink to="/add-user">Add user</StyledLink>
      </LinksWrapper>
    </Nav>
  );
};

export default Navigation;
