import { Grid, Toolbar } from '@mui/material';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
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
      <Toolbar
        sx={{
          minHeight: {
            xs: '100px',
            md: '120px',
            lg: '110px'
          }
        }}
      />

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
