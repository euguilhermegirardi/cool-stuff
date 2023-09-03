import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import Dashboard from 'pages/dashboard';
import NotFound from 'pages/notFound/notFound';
import SignIn from 'pages/signIn';
import SignUp from 'pages/signUp';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';
import ProtectedRoutes from './protectedRoutes';

const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route
        path={ApplicationRoutes.signIn}
        element={
          isLoggedIn ? (
            <Navigate to={ApplicationRoutes.dashboard} replace />
          ) : (
            <SignIn />
          )
        }
      />

      <Route
        path={ApplicationRoutes.signUp}
        element={<SignUp />}
      />

      <Route
        path={ApplicationRoutes.dashboard}
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />

      <Route
        path={ApplicationRoutes.badRoute}
        element={<NotFound />}
      />
    </Routes>
  )
};

export default AppRoutes;
