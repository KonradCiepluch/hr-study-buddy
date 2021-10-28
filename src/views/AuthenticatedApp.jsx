import React from 'react';
import { Wrapper } from './Root.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import AddStudent from './AddUser';
import Dashboard from './Dashboard';
import Notes from './Notes';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Switch, Route, Redirect } from 'react-router-dom';

const AuthenticatedApp = () => (
  <MainTemplate>
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/group" />
        </Route>
        <Route path="/add-student">
          <AddStudent />
        </Route>
        <Route path="/group/:id?">
          <Dashboard />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Title>Not found</Title>
      </Switch>
    </Wrapper>
  </MainTemplate>
);

export default AuthenticatedApp;
