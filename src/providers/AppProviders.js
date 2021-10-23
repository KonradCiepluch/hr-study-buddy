import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyle';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import { Provider } from 'react-redux';
import { store } from 'components/store';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
