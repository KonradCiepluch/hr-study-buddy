import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 27px 24px 27px 42px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
`;
