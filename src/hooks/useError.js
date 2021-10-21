import React, { useState, useCallback } from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState('');

  const dispatchError = useCallback((message) => {
    if (message) {
      setError(message);
      setTimeout(() => setError(''), 7000);
    }
    setError(message);
  }, []);

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const error = React.useContext(ErrorContext);

  if (!Object.keys(error).length) {
    throw Error('useError needs to be used inside ErrorContext');
  }

  return error;
};

export default useError;
