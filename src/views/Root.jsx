import React from 'react';
import { Wrapper } from './Root.styles';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyle';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
      </Switch>
    </Wrapper>
  </MainTemplate>
);

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      onSubmit={handleSubmit(handleSignIn)}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>Login is required</span>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>Login is required</span>}
      <Button type="submit">Sign in</Button>
      {loginError && <span style={{ marginTop: '5px', fontSize: '14px', color: '#737C8E', fontWeight: '700' }}>{loginError}</span>}
    </form>
  );
};

const Root = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const { data } = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async (data) => {
    try {
      const { data: user } = await axios.post('/login', { ...data });
      setUser(user);
      localStorage.setItem('token', user.token);
    } catch (e) {
      console.log(e);
      setError('Please provide valid user data');
    }
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
