import React, { useState } from 'react';
import styled from 'styled-components';
import Note from 'components/molecules/Note/Note';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  width: 400px;
  position: absolute;
  min-height: 97px;
  right: 0;
  top: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
`;

const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -55px;
  top: 40px;
  border-radius: 8px 8px 0 0;
  color: white;
  border: none;
  cursor: pointer;
`;

const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  max-height: 700px;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={() => setIsOpen((prevState) => !prevState)}>Notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ id, title, content }) => <Note key={id} id={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
