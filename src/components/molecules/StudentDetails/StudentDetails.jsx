import React from 'react';
import { Title } from 'components/atoms/Title/Title.styles';
import Grade from 'components/atoms/Grade/Grade.styles';
import { Wrapper } from './StudentDetails.styles';

const StudentDetails = ({ student: { name, average, group, attendance, course, subjects }, children }) => {
  return (
    <Wrapper>
      <Grade isBig grade={average}>
        {average}
      </Grade>
      <Title as="h3">{name}</Title>
      {children}
    </Wrapper>
  );
};

export default StudentDetails;
