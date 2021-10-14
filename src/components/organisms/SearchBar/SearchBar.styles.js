import styled from 'styled-components';
import Input from 'components/atoms/Input/Input.styles';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 350px;
    color: ${({ theme }) => theme.colors.darkGrey};
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;

export const MatchingStudents = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 200px;
  list-style: none;
  padding: 31px 0;
  border-radius: 25px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  background-color: #fff;
  z-index: 1;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MatchingStudent = styled.li`
  position: relative;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  padding: 11px 28px 16px;
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.lightPurple : 'transparent')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  &:not(:last-child)::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 29px;
    width: calc(100% - 45px);
    height: 1px;
    background-color: ${({ theme }) => theme.colors.mediumGrey};
  }
`;
