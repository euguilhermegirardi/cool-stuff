import react from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/signIn';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<SignIn />}
      />
      <Route
        path={'*'}
        element={<p>Something went wrong: 404!</p>}
      />
    </Routes>
  )
};

export default AppRoutes;
