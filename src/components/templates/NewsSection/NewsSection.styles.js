import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;

  @media (max-width: 1240px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    overflow-y: unset;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.mediumGrey};
  }
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 12px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    margin-left: 35px;
    max-width: 200px;
    object-fit: cover;
  }
`;
