import useAuth from 'hooks/useAuth';
import Dashboard from './dashboard';

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
