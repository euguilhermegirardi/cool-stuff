import { Grid } from '@mui/material';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import FifthSection from './components/fifthSection/fifithSection';
import FirstSection from './components/firstSection/firstSection';
import SecondSection from './components/secondSection/secondSection';
import SixthSection from './components/sixthSection/sixthSection';
import ThirdSection from './components/thirdSection/thirdSection';
const Dashboard = withErrorBoundary(({
  contentInnerWidth,
  componentRef,
  handleLogOut,
}: {
  contentInnerWidth: number;
  componentRef: any;
  handleLogOut: () => void;
}) => {
  return (
    <Grid ref={componentRef}>
      <MuiToolbar />

      <FirstSection contentInnerWidth={contentInnerWidth} />
      <SecondSection contentInnerWidth={contentInnerWidth} />
      <ThirdSection contentInnerWidth={contentInnerWidth} />
      <FifthSection contentInnerWidth={contentInnerWidth} />
      <SixthSection contentInnerWidth={contentInnerWidth} />

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
