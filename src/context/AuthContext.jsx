import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
