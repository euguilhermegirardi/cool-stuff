import { Box, Grid, Typography } from '@mui/material';
import PikachuImg from 'assets/images/Pikachu.png';
import clsx from 'clsx';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from '../../css/sections.styles';

const FirstSection = () => {
  const classes = styles();
  const translations = useTranslations();

  return (
    <Grid className={classes.mainSection}>
      <Grid className={classes.firstSection}>
        <Grid className={classes.evenTxtSection}>
          <Typography className={classes.title}>
            {translations.dashboard.worldOfPokemonTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.worldOfPokemonTxt}
          </Typography>
        </Grid>

        <Grid
          className={clsx(classes.imageContent, classes.evenImgSection)}>
          <Box
            component="img"
            className={classes.image}
            src={PikachuImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
