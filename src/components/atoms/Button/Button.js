import styled from 'styled-components';

const Button = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 20px;
  font-weight: 700;
  border: none;
`;

export default Button;
