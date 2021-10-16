import StudentListItem from './StudentListItem';

export default {
  title: 'Componenets/Molecules/StudentListItem',
  component: StudentListItem,
};

const Template = (args) => <StudentListItem name="Story" id="Story" {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
  student: {
    name: 'Adam Romański',
    attendance: '35%',
    average: '2.0',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  student: {
    name: 'Adam Romański',
    attendance: '55%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  student: {
    name: 'Adam Romański',
    attendance: '99%',
    average: '5.0',
  },
};
