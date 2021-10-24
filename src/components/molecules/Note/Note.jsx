import React from 'react';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import { useRemoveNoteMutation } from 'components/store';

const Note = ({ id, title, content = 'No content' }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => removeNote({ id });

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
