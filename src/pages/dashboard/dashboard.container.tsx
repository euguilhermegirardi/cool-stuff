import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import useAuth from 'hooks/useAuth';
import { withErrorBoundary } from 'react-error-boundary';
import Dashboard from './dashboard';

const DashboardContainer = withErrorBoundary(() => {
  const { logout } = useAuth();

  const handleLogOut = () => logout();

  return (
    <Dashboard
      handleLogOut={handleLogOut}
    />
  );
}, ErrorFallbackComponent);

export default DashboardContainer;
