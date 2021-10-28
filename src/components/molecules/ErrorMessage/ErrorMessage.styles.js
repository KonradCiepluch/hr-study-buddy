import styled, { keyframes } from 'styled-components';

const scaleDown = keyframes`
    from {
        transform: translateX(-50%) scaleX(1);
    }
    to {
        transform: translateX(-50%) scaleX(0);
    }
`;

const slide = keyframes`
    from {
        transform: translate(-50%, 200%);
    }
    to {
        transform: translate(-50%, 0);
    }
`;

export const ErrorWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 65px;
  width: 465px;
  height: 116px;
  transform: translate(-50%, 200%);
  border-radius: 15px;
  border: 3px solid ${({ theme }) => theme.colors.error};
  padding: 33px 20px 29px 22px;
  color: ${({ theme }) => theme.colors.error};
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2%;
  animation: ${slide} 1s ease-in-out both, ${slide} 1s 6s ease-in-out reverse forwards;

  &::before {
    position: absolute;
    content: '';
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 85px;
    height: 6px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.error};
    opacity: 0.5;
  }
  &::after {
    position: absolute;
    content: '';
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: left center;
    width: 85px;
    height: 6px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.error};
    animation: ${scaleDown} 5s 1s linear both;
  }

  h3 {
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.error};
    margin-bottom: 8px;
  }
`;
