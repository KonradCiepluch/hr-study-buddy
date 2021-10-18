import React from 'react';
import { Title } from 'components/atoms/Title/Title.styles';
import Grade from 'components/atoms/Grade/Grade.styles';
import { Wrapper, Course, CourseName, Subject } from './StudentDetails.styles';

const StudentDetails = ({ student: { name, average, course, grades } }) => (
  <Wrapper>
    <Grade isBig grade={average}>
      {average}
    </Grade>
    <Title as="h3">{name}</Title>
    <Course>Course:</Course>
    <CourseName>{course}</CourseName>
    <Course>Average grades:</Course>
    {grades.map(({ subject, average }) => (
      <Subject key={subject}>
        {subject} <Grade grade={average}>{average}</Grade>
      </Subject>
    ))}
  </Wrapper>
);

export default StudentDetails;
