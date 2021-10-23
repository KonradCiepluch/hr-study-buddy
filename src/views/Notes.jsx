import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addNote } from 'components/store';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  align-content: start;
  grid-gap: 30px;
  padding: 30px;
`;

const FormWrapper = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledFormField = styled(FormField)`
  width: 100%;
  height: ${({ isTextArea }) => (isTextArea ? '300px' : 'auto')};
`;

const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;

const Notes = () => {
  const notes = useSelector((state) => state.notes);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleAddNote = (data) => {
    dispatch(addNote(data));
    reset();
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
        {errors.title && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>Title is required</span>}
        <StyledFormField isTextArea label="Content" name="content" id="content" {...register('content', { required: true })} />
        {errors.content && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>Content is required</span>}
        <Button type="submit">Add note</Button>
      </FormWrapper>
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

Notes.propTypes = {};

export default Notes;
