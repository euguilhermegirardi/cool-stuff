import { Box, Grid, Typography } from '@mui/material';
import CharmanderImg from 'assets/images/char.jpeg';
import clsx from 'clsx';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from 'pages/dashboard/css/sections.styles';

const FourthSection = () => {
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
            {translations.dashboard.createTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.createTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.oddImgSection)}>
          <Box
            component="img"
            className={classes.image}
            sx={{ mixBlendMode: 'multiply' }}
            src={CharmanderImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FourthSection;
