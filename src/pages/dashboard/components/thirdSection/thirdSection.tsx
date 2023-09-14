import { Box, Grid, Typography } from '@mui/material';
import MachampImg from 'assets/images/machamp.png';
import clsx from 'clsx';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from 'pages/dashboard/css/sections.styles';

const ThirdSection = () => {
  const classes = styles();
  const translations = useTranslations();

  return (
    <Grid className={classes.mainSection}>
      <Grid className={classes.firstSection}>
        <Grid className={classes.evenTxtSection}>
          <Typography className={classes.title}>
            {translations.dashboard.collectTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.collectTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.evenImgSection)}>
          <Box
            component="img"
            className={classes.image}
            src={MachampImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ThirdSection;
