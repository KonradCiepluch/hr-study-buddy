import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = React.useState(null);

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
      setError(null);
      localStorage.setItem('token', user.token);
    } catch (e) {
      console.log(e);
      setError('Please provide valid user data');
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, error, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) throw Error('useAuth must be used inside AuthProvider');

  return auth;
};
