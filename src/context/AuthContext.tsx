import { createContext, useCallback, useMemo, useState } from 'react';

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

export type Auth = {
  accessToken?: string | null;
  refreshToken?: string | null;
};

interface AuthContextProps {
  auth: Auth;
  updateAuth: (newAuth: Auth) => void;
  resetAuth: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  auth: {},
  updateAuth: () => {},
  resetAuth: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const accessTokenInLocalStorage = localStorage.getItem('accessToken');
  const refreshTokenInLocalStorage = localStorage.getItem('refreshToken');

  const [auth, setAuth] = useState<Auth>({
    accessToken: accessTokenInLocalStorage,
    refreshToken: refreshTokenInLocalStorage,
  });

  const updateAuth = useCallback((newAuth: Auth) => {
    setAuth(newAuth);
    localStorage.setItem('accessToken', newAuth.accessToken!);
    localStorage.setItem('refreshToken', newAuth.refreshToken!);
  }, []);

  const resetAuth = useCallback(() => {
    setAuth({});
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }, []);

  const value = useMemo(
    () => ({ auth, updateAuth, resetAuth }),
    [auth, resetAuth, updateAuth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
