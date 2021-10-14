import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import useStudents from 'hooks/useStudents';

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);
  return (
    <>
      <Title>{'Students list:'}</Title>
      <StyledList>
        {students.map((student) => (
          <UsersListItem key={student.name} student={student} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
