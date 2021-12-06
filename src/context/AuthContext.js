import React, { useState, createContext } from "react";

// create a context to call in any part of the states
export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

// Provider will encapsule the app state
export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
