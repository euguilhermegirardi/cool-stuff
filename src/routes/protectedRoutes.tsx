import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import AppLayout from 'components/appLayout';
import useAuth from 'hooks/useAuth';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to={ApplicationRoutes.signIn} />;
  return <AppLayout>{children}</AppLayout>;
};

export default ProtectedRoutes;
