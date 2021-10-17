import styled from 'styled-components';

const Wrapper = styled.li`
  position: relative;
  display: flex;
  padding: 33px 0 24px;
  cursor: pointer;

  &:not(:last-child)::after {
    position: absolute;
    content: '';
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #dfe2e8;
  }

  div:nth-child(2) {
    color: #737c8e;
    margin: 0 14px 0 24px;

    p:first-child {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    p:last-child {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export default Wrapper;
