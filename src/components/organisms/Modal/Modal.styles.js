import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';

const scaleUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 700px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  opacity: 0;
  animation: ${scaleUp} 0.4s both;

  @media (max-width: 1240px) {
    min-width: unset;
    width: calc(100% - 30px);
    max-width: 600px;
  }

  &:focus {
    outline: none;
  }
`;
