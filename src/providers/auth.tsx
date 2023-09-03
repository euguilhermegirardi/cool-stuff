import { ReactElement, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import AuthContext from '../context/auth.context';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const [isLoggedIn, setIsLoggedIn] = useState(!!accessToken);

  const login = () => {
    setAccessToken(uuidv1());
    setIsLoggedIn(true);
  };

  const logout = () => {
    setAccessToken('');
    setIsLoggedIn(false);
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
