import styled from 'styled-components';

const Label = styled.label`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 10px;
`;

export default Label;
