import React from 'react';
import Button from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose} contentLabel="App-modal">
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
