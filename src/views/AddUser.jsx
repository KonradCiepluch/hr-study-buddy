import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { useForm } from 'react-hook-form';
import { useAddNewStudentToGroupMutation } from 'components/store';

const Error = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 5px;
`;

const AddStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [addStudent] = useAddNewStudentToGroupMutation();

  const handleSubmitUser = (data) => {
    addStudent(data);
    reset();
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmit(handleSubmitUser)}>
      <Title>Add new user</Title>
      <FormField label="Name" id="name" name="name" {...register('name', { required: true, minLength: 6 })} />
      {errors.name && <Error>Name is required and should contain at least 6 characters</Error>}
      <FormField label="Attendance" id="attendance" name="attendance" {...register('attendance', { required: true })} />
      {errors.attendance && <Error>Attendance is required</Error>}
      <FormField label="Average" id="average" name="average" type="number" step=".1" {...register('average', { required: true, min: 1, max: 5 })} />
      {errors.average && <Error>Average is required and its value should be in the range from 1 to 5</Error>}
      <FormField select label="Group" name="group" id="group" {...register('group', { required: true })} />
      {errors.group && <Error>Group is required</Error>}
      <FormField label="Consent" type="checkbox" id="consent" name="consent" {...register('consent', { required: true })} />
      {errors.consent && <Error>You must give a consent</Error>}
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddStudent;
