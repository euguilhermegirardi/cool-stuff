import { Grid } from '@mui/material';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import FirstSection from './components/firstSection/firstSection';
import SecondSection from './components/secondSection/secondSection';

const Dashboard = withErrorBoundary(({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) => {
  const translations = useTranslations();

  return (
    <Grid sx={{ mt: '20px' }}>
      <FirstSection />
      <SecondSection />

      <MuiButton
        type='button'
        color='ceruleanBlue'
        text={translations.dashboard.logout}
        onClick={handleLogOut}
      />
    </Grid>
  );
}, ErrorFallbackComponent);

export default Dashboard;
