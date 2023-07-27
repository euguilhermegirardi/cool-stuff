import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';
import AuthContext from '../context/auth.context';
import useLocalStorage from '../hooks/useLocalStorage';
import ApplicationRoutes from '../utils/navigation/applicationRoutes';

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const [isLoggedIn, setIsLoggedIn] = useState(!!accessToken);

  const [userEmail, setUserEmail] = useLocalStorage('cool-stuff-email', '');
  const [, setUserPassword] = useLocalStorage('cool-stuff-password', '');
  const [lsUserEmail,] = useLocalStorage('cool-stuff-email', '');

  const navigate = useNavigate();

  const login = (
    email: string,
    password: string,
    rememberMe?: boolean,
  ) => {
    setAccessToken(uuidv1());
    setIsLoggedIn(true);
  };

  const logout = () => {
    setAccessToken('');
    setIsLoggedIn(false);
    navigate(ApplicationRoutes.signIn);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
