import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from 'components/atoms/Title/Title.styles';
import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { removeNote } from 'components/store';

const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;

const Note = ({ id, title, content = 'No content' }) => {
  const dispatch = useDispatch();

  const handleRemoveNote = () => dispatch(removeNote({ id }));

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
