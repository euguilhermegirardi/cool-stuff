import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';
import useLocalStorage from '../../hooks/useLocalStorage';
import ApplicationRoutes from '../../utils/navigation/applicationRoutes';

const DashboardContainer = () => {
  const navigate = useNavigate();
  const [, setUserEmail] = useLocalStorage('cool-stuff-email', '');
  const [, setUserPassword] = useLocalStorage('cool-stuff-password', '');

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
