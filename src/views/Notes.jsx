import React from 'react';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styles';
import Button from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useForm } from 'react-hook-form';
import { useGetNotesQuery, useAddNoteMutation } from 'components/store';

const Notes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading } = useGetNotesQuery();

  const [addNote] = useAddNoteMutation();

  const handleAddNote = (data) => {
    addNote(data);
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
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => <Note key={id} id={id} title={title} content={content} />)
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

Notes.propTypes = {};

export default Notes;
