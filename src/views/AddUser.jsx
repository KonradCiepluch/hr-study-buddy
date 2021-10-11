import React, { useContext } from 'react';
import { Title } from 'components/atoms/Title/Title.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';
import { UsersContext } from 'providers/UsersProvider';
import useForm from 'hooks/useForm';

const initialFormState = { name: '', attendance: '', average: '', consent: false, error: '' };

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);

  const { handleInputChange, handleClearForm, handleThrowError, handleToggleConsent, formValues } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    const { name, attendance, average, consent } = formValues;
    if (name && attendance && average && consent) {
      handleAddUser({ name, attendance, average });
      handleClearForm();
    } else handleThrowError('You must give a consent');
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new user</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Consent" type="checkbox" id="consent" name="consent" checked={formValues.consent} onChange={handleToggleConsent} />
      <Button type="submit">Add</Button>
      {formValues.error && <p>{formValues.error} </p>}
    </ViewWrapper>
  );
};

export default AddUser;
