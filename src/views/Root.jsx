import React, { useState, useEffect } from 'react';
import { Wrapper } from './Root.styles';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyle';
import usersData from 'data/users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mockApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });

const initialFormState = { name: '', attendance: '', average: '' };

const Root = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsLoading(true);
    mockApi()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = { ...formValues };
    if (newUser.name && newUser.attendance && newUser.average) {
      setUsers([newUser, ...users]);
      setFormValues(initialFormState);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser handleInputChange={handleInputChange} handleAddUser={handleAddUser} formValues={formValues} />
              </Route>
              <Route path="/">
                <Dashboard users={users} isLoading={isLoading} deleteUser={deleteUser} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
