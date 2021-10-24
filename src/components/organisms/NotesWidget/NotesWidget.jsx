import React, { useState } from 'react';
import { Wrapper, WidgetHandler, NotesWrapper } from './NotesWidget.styles';
import Note from 'components/molecules/Note/Note';
import { useGetNotesQuery } from 'components/store';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading } = useGetNotesQuery();

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={() => setIsOpen((prevState) => !prevState)}>Notes</WidgetHandler>
      {isLoading ? (
        'Loading notes...'
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

export default NotesWidget;
