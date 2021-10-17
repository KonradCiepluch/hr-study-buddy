import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { CourseName, Course, Subject } from 'components/molecules/StudentDetails/StudentDetails.styles';
import Grade from 'components/atoms/Grade/Grade.styles';

export default {
  title: 'Componenets/Organisms/Modal',
  component: Modal,
};

const student = {
  name: 'Adam Romański',
  attendance: '55%',
  average: '3.5',
  group: 'A',
  course: 'Economy and finances',
  subjects: [
    { name: 'Modern Economy', grade: '3.4' },
    { name: 'Trade and Logisitcs', grade: '4.1' },
    { name: 'Business Philosophy', grade: '5.0' },
  ],
};

const Template = (args) => (
  <Modal name="Story" id="Story" {...args}>
    <StudentDetails student={student}>
      <Course>Course:</Course>
      <CourseName>{student.course}</CourseName>
      <Course>Average grades:</Course>
      {student.subjects.map((subject) => (
        <Subject key={subject.name}>
          {subject.name} <Grade grade={subject.grade}>{subject.grade}</Grade>
        </Subject>
      ))}
    </StudentDetails>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {};
