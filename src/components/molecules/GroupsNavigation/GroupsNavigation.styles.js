import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title.styles';
import Button from 'components/atoms/Button/Button';

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 38px 0 25px 9px;
`;

export const NavTitle = styled(Title)`
  font-size: 30px;
`;

export const NavButton = styled(Button)`
  position: relative;
  margin: 0 0 0 20px;
  padding: 6px 25px 6px 20px;
  background-color: ${({ theme }) => theme.colors.lightPurple};

  svg {
    margin-left: 3px;
    margin-bottom: -0.5px;
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: rotate(90deg);
  }

  &:hover nav {
    opacity: 1;
    transform: translate(-50%, 0);
    visibility: visible;
  }
`;

export const Navigation = styled.nav`
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 15px;
  opacity: 0;
  transform: translate(-50%, -10px);
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;

    &:nth-child(2) {
      margin: 0 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;
