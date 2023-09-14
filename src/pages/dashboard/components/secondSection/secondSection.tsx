import { Box, Grid, Typography } from '@mui/material';
import AerodactylImg from 'assets/images/aerodactyl.png';
import clsx from 'clsx';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from 'pages/dashboard/css/sections.styles';

const SecondSection = () => {
  const classes = styles();
  const translations = useTranslations();

  return (
    <Grid
      className={classes.mainSection}
      sx={{
        backgroundColor: '#b3a1254d',
        color: 'darkGrey.main',
      }}
    >
      <Grid className={classes.firstSection}>
        <Grid className={classes.oddTxtSection}>
          <Typography className={classes.title}>
            {translations.dashboard.exploreTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.exploreTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.oddImgSection)}>
          <Box
            component="img"
            className={classes.image}
            sx={{ mixBlendMode: 'multiply' }}
            src={AerodactylImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
