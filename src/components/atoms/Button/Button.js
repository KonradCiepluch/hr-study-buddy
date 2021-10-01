import styled from 'styled-components';

const Button = styled.button`
  margin: 15px 0;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  font-weight: 700;
  border: none;
`;

export default Button;
