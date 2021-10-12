import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  grid-column: 1 /2;
  grid-row: 1 / 3;
  width: 150px;
  border-right: 1px solid ${({ theme }) => theme.colors.mediumGrey};
`;

export const NavTitle = styled.h1`
  padding: 13px 15px 13px 44px;
  font-size: 15px;
  font-weight: 700;
  text-align: right;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 30px;
  line-height: 113%;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 47px 24px 0 0;
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  position: relative;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  line-height: 20px;
  margin-bottom: 13.6px;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: calc(100% + 3px);
    transform: translateY(-50%);
    height: 3px;
    width: 22px;
    background-color: ${({ theme }) => theme.colors.mediumGrey};
    opacity: 0;
    transition: opacity 0.5s;
  }

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
`;
