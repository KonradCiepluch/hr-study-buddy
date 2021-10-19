import React from 'react';
import { Nav, NavTitle, LinksWrapper, StyledLink } from './Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = ({ isLong }) => {
  const { signOut } = useAuth();
  return (
    <Nav isLong={isLong}>
      <NavTitle>Study Buddy</NavTitle>
      <LinksWrapper>
        <StyledLink to="/group">Dashboard</StyledLink>
        <StyledLink to="/add-user">Add user</StyledLink>
        <StyledLink as="a" onClick={signOut}>
          Logout
        </StyledLink>
      </LinksWrapper>
    </Nav>
  );
};

export default Navigation;
