import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Dashboard from '../pages/dashboard';
import ApplicationRoutes from '../utils/navigation/applicationRoutes';

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to={ApplicationRoutes.signIn} />;
  return <Dashboard />;
};

export default ProtectedRoutes;
