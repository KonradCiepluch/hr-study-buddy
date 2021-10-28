import React from 'react';
import { Redirect } from 'react-router';
import { useParams } from 'react-router';
import { StyledList, StudentsInfo } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import StudentListItem from 'components/molecules/StudentListItem/StudentListItem';
import { useGetStudentsByGroupQuery } from 'components/store';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();

  const { data, isLoading } = useGetStudentsByGroupQuery(id);

  if (isLoading) return <Title>Loading students...</Title>;

  if (!data) return <Redirect to="/group/A" />;

  return (
    <>
      <Title>Students list:</Title>
      <StyledList>
        {data ? (
          data.students.length ? (
            data.students.map((student) => (
              <StudentListItem key={student.name} student={student} onClick={() => handleOpenStudentDetails(student.id)} />
            ))
          ) : (
            <StudentsInfo>There aren't present students</StudentsInfo>
          )
        ) : null}
      </StyledList>
    </>
  );
};

export default StudentsList;
