import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 150px 0.75fr 0.75fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-y: hidden;

  @media (max-width: 1240px) {
    height: auto;
    grid-template-rows: 90px 1fr 1fr;
    grid-template-columns: 150px 1fr;
    overflow-y: unset;
  }
`;
