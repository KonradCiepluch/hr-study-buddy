import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title.styles';
import Grade from 'components/atoms/Grade/Grade.styles';
import { Wrapper, Course, CourseName, Subject } from './StudentDetails.styles';
import { useGetStudentByIdQuery } from 'components/store';

const StudentDetails = ({ studentId = '' }) => {
  const { data, isLoading } = useGetStudentByIdQuery(studentId);

  if (isLoading) return <Title as="h3">Loading students details...</Title>;

  return (
    <Wrapper>
      <Grade isBig grade={data.student.average}>
        {data.student.average}
      </Grade>
      <Title as="h3">{data.student.name}</Title>
      <Course>Course:</Course>
      <CourseName>{data.student.course}</CourseName>
      <Course>Average grades:</Course>
      {data.student.grades.map(({ subject, average }) => (
        <Subject key={subject}>
          {subject} <Grade grade={average}>{average}</Grade>
        </Subject>
      ))}
    </Wrapper>
  );
};

StudentDetails.propTypes = {
  studentId: PropTypes.string.isRequired,
};

export default StudentDetails;
