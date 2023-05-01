import React, { createContext } from 'react';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    return <AuthContext.Provider value={5}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
