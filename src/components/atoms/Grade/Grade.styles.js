import styled from 'styled-components';

const Grade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  letter-spacing: -0.02em;
  border-radius: 50%;
  background-color: ${({ grade, theme }) => {
    if (grade >= 4) return theme.colors.success;
    if (grade >= 3) return theme.colors.warning;
    if (grade >= 2) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export default Grade;
