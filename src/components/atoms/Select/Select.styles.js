import styled from 'styled-components';

const Select = styled.select`
  width: 44px;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 700;
  border: none;
  border-radius: 10px;
`;

export default Select;
