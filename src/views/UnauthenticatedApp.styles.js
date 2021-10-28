import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 350px;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 35px;
  background-color: rgba(236, 239, 247, 0.8);
`;

export const Error = styled.span`
  margin-top: '5px';
  font-size: '14px';
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: '700';
`;
