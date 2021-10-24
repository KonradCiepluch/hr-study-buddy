import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: white;
  cursor: pointer;

  svg {
    transform: translateX(0.5px);
    width: 70%;
    height: 70%;
  }
`;

export default StyledButton;
