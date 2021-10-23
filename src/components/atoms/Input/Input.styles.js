import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ isTextArea }) => (isTextArea ? '15px' : '25px')};
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export default Input;
