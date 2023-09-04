import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';

const Dashboard = withErrorBoundary(({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) => {
  const translations = useTranslations();
  return (
    <>
      <div>Dashboard</div>

      <MuiButton
        type='button'
        color='ceruleanBlue'
        text={translations.dashboard.logout}
        onClick={handleLogOut}
      />
    </>
  );
}, ErrorFallbackComponent);

export default Dashboard;
