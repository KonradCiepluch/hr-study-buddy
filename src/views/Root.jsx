import React from 'react';
import { Wrapper } from './Root.styles';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import Notes from './Notes';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import useError from 'hooks/useError';

const AuthenticatedApp = () => (
  <MainTemplate>
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/group" />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>
        <Route path="/group/:id?">
          <Dashboard />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
      </Switch>
    </Wrapper>
  </MainTemplate>
);

const UnauthenticatedApp = () => {
  const { signIn, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        onSubmit={handleSubmit(signIn)}
      >
        <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
        {errors.login && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>Login is required</span>}
        <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>Login is required</span>}
        <Button type="submit">Sign in</Button>
        {error && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>{error}</span>}
      </form>
    </>
  );
};

const Root = () => {
  const { user } = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
