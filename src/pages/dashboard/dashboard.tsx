import { Grid } from '@mui/material';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import FifthSection from './components/fifthSection/fifithSection';
import FirstSection from './components/firstSection/firstSection';
import FourthSection from './components/fourthSection/fourthSection';
import SecondSection from './components/secondSection/secondSection';
import SixthSection from './components/sixthSection/sixthSection';
import ThirdSection from './components/thirdSection/thirdSection';

const Dashboard = withErrorBoundary(({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) => {
  const translations = useTranslations();

  return (
    <Grid>
      <MuiToolbar />

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />

      {/* <MuiButton
        type='button'
        color='ceruleanBlue'
        text={translations.dashboard.logout}
        onClick={handleLogOut}
      /> */}
    </Grid>
  );
}, ErrorFallbackComponent);

export default Dashboard;
