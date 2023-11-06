import { Grid } from '@mui/material';
import AerodactylImg from 'assets/images/aerodactyl.png';
import CharmanderImg from 'assets/images/char.jpeg';
import CharizardImg from 'assets/images/charizard.png';
import GengarImg from 'assets/images/gengar.png';
import MachampImg from 'assets/images/machamp.png';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import Section from './components/section/section';

const Dashboard = withErrorBoundary(({
  contentInnerWidth,
  componentRef,
  handleLogOut,
}: {
  contentInnerWidth: number;
  componentRef: any;
  handleLogOut: () => void;
}) => {
  const translations = useTranslations();

  return (
    <Grid ref={componentRef}>
      <MuiToolbar />

      <Section
        oddSection={false}
        contentInnerWidth={contentInnerWidth}
        title={translations.dashboard.worldOfPokemonTitle}
        subtitle={translations.dashboard.worldOfPokemonTxt}
        image={GengarImg}
        altImage={'gengar-image-png'}
        skeletonWidth={230}
        skeletonHeight={230}
      />

      <Section
        oddSection={true}
        contentInnerWidth={contentInnerWidth}
        title={translations.dashboard.exploreTitle}
        subtitle={translations.dashboard.exploreTxt}
        image={AerodactylImg}
        altImage={'aerodactyl-image-png'}
        skeletonWidth={180}
        skeletonHeight={180}
      />

      <Section
        oddSection={false}
        contentInnerWidth={contentInnerWidth}
        title={translations.dashboard.collectTitle}
        subtitle={translations.dashboard.collectTxt}
        image={MachampImg}
        altImage={'machamp-image-png'}
        skeletonWidth={180}
        skeletonHeight={180}
      />

      <Section
        oddSection={true}
        contentInnerWidth={contentInnerWidth}
        title={translations.dashboard.connectTitle}
        subtitle={translations.dashboard.connectTxt}
        image={CharizardImg}
        altImage={'charizard-image-png'}
        skeletonWidth={180}
        skeletonHeight={180}
      />

      <Section
        oddSection={false}
        contentInnerWidth={contentInnerWidth}
        title={translations.dashboard.discoverTitle}
        subtitle={translations.dashboard.discoverTxt}
        subtitle2={translations.dashboard.discoverTxt2}
        subtitle3={translations.dashboard.discoverTxt3}
        image={CharmanderImg}
        altImage={'charmander-image-png'}
        skeletonWidth={180}
        skeletonHeight={180}
      />

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
