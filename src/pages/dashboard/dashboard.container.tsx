import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';
import useSessionStorage from '../../hooks/useSessionStorage';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const DashboardContainer = () => {
  const navigate = useNavigate();
  const [, setUserEmail] = useSessionStorage('cool-stuff-email', '');
  const [, setUserPassword] = useSessionStorage('cool-stuff-password', '');

  const handleLogOut = () => {
    setUserEmail('');
    setUserPassword('');
    navigate(ApplicationRoutes.signIn);
  };

  return (
    <Dashboard
      handleLogOut={handleLogOut}
    />
  );
};

export default DashboardContainer;
