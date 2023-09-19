import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import AddCustomPokemon from 'pages/menu/addCustomPokemon';
import Dashboard from 'pages/menu/dashboard';
import PokemonCard from 'pages/menu/pokemonCard';
import PokemonList from 'pages/menu/pokemonList';
import PokemonStatistics from 'pages/menu/pokemonStatistics';
import ContactUs from 'pages/navbar/contactUs';
import ProjectTechnologies from 'pages/navbar/projectTechnologies';
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
        path={ApplicationRoutes.projectTechnologies}
        element={
          <ProtectedRoutes>
            <ProjectTechnologies />
          </ProtectedRoutes>
        }
      />

      <Route
        path={ApplicationRoutes.contactUs}
        element={
          <ProtectedRoutes>
            <ContactUs />
          </ProtectedRoutes>
        }
      />

      <Route
        path={ApplicationRoutes.pokemonList}
        element={
          <ProtectedRoutes>
            <PokemonList />
          </ProtectedRoutes>
        }
      />

      <Route
        path={ApplicationRoutes.pokemonCard}
        element={
          <ProtectedRoutes>
            <PokemonCard />
          </ProtectedRoutes>
        }
      />

      <Route
        path={ApplicationRoutes.pokemonStatistics}
        element={
          <ProtectedRoutes>
            <PokemonStatistics />
          </ProtectedRoutes>
        }
      />

      <Route
        path={ApplicationRoutes.addCustomPokemon}
        element={
          <ProtectedRoutes>
            <AddCustomPokemon />
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
