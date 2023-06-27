import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/notFound/notFound';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import ApplicationRoutes from '../utils/navigation/applicationRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ApplicationRoutes.signIn}
        element={<SignIn />}
      />

      <Route
        path={ApplicationRoutes.signUp}
        element={<SignUp />}
      />

      <Route
        path={ApplicationRoutes.badRoute}
        element={<NotFound />}
      />
    </Routes>
  )
};

export default AppRoutes;
