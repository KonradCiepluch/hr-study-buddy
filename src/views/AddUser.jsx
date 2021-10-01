import React, { useState, useContext } from 'react';
import { Title } from 'components/atoms/Title/Title.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = { name: '', attendance: '', average: '' };

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const [formValues, setFormValues] = useState(initialFormState);
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    const { name, attendance, average } = formValues;
    if (name && attendance && average) {
      handleAddUser({ name, attendance, average });
      setFormValues(initialFormState);
    }
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
