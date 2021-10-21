import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import useError from './useError';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { dispatchError } = useError();

  useEffect(() => {
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

  const signIn = async (data) => {
    try {
      const { data: user } = await axios.post('/login', { ...data });
      setUser(user);
      dispatchError('');
      localStorage.setItem('token', user.token);
    } catch (e) {
      console.log(e);
      dispatchError('Please provide valid user data');
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!Object.keys(auth).length) throw Error('useAuth must be used inside AuthProvider');

  return auth;
};
