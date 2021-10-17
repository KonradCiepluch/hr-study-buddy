import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import useStudents from 'hooks/useStudents';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);
  return (
    <>
      <Title>{'Students list:'}</Title>
      <StyledList>
        {students.map((student) => (
          <StudentListItem key={student.name} student={student} onClick={() => handleOpenStudentDetails(student.id)} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
