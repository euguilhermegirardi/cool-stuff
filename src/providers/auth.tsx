import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth.context';
import useLocalStorage from '../hooks/useLocalStorage';
import useSessionStorage from '../hooks/useSessionStorage';
import ApplicationRoutes from '../utils/navigation/applicationRoutes';

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const [isLoggedIn, setIsLoggedIn] = useState(!!accessToken);

  const [, setUserEmail] = useSessionStorage('cool-stuff-email', '');
  const [, setUserPassword] = useSessionStorage('cool-stuff-password', '');
  const [isRememberMe, setIsRememberMe] = useLocalStorage('rememberMe', '');
  const navigate = useNavigate();

  const login = (
    email: string,
    password: string,
    rememberMe?: boolean,
  ) => {
    setIsLoggedIn(true);
    setAccessToken(email);
    setUserEmail(email);
    setUserPassword(password);
    setIsRememberMe('true');
  };

  const logout = () => {
    setAccessToken('');
    setUserEmail('');
    setUserPassword('');
    setIsLoggedIn(false);
    navigate(ApplicationRoutes.signIn);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
