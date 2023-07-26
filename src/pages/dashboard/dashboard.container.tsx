import Dashboard from './dashboard';
import useAuth from '../../hooks/useAuth';

const DashboardContainer = () => {
  const { logout } = useAuth();

  const handleLogOut = () => logout();

  return (
    <Dashboard
      handleLogOut={handleLogOut}
    />
  );
};

export default DashboardContainer;
