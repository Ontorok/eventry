'use client';

const { AuthContext } = require('@/_contexts');
const { useState } = require('react');

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const value = {
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
