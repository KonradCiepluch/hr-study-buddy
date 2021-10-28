import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  h3 {
    margin-left: 100px;
  }
`;

export const Course = styled.div`
  width: 100%;
  padding-left: 36px;
  padding-top: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 15px;
`;

export const CourseName = styled.div`
  width: 100%;
  padding-left: 36px;
  padding-top: 25px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 21px;
`;

export const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  padding-top: 23px;
  padding-left: 36px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 15px;

  @media (max-width: 1240px) {
    width: 75%;
  }
`;
