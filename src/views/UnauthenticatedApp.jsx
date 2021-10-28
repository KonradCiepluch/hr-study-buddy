import React from 'react';
import { Wrapper, LoginForm, Error } from './UnauthenticatedApp.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

const UnauthenticatedApp = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <LoginForm onSubmit={handleSubmit(signIn)}>
        <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
        {errors.login && <Error>Login is required</Error>}
        <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <Error>Password is required</Error>}
        <Button type="submit">Sign in</Button>
      </LoginForm>
    </Wrapper>
  );
};

export default UnauthenticatedApp;
