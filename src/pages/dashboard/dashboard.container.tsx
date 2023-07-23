import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';
import useAuth from '../../hooks/useAuth';
import useSessionStorage from '../../hooks/useSessionStorage';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const DashboardContainer = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [, setUserEmail] = useSessionStorage('cool-stuff-email', '');
  const [, setUserPassword] = useSessionStorage('cool-stuff-password', '');

  const handleLogOut = () => logout();

  return (
    <Dashboard
      handleLogOut={handleLogOut}
    />
  );
};

export default DashboardContainer;
