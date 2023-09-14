import { Box, Grid, Typography } from '@mui/material';
import PokemonImg from 'assets/images/starters.jpeg';
import clsx from 'clsx';
import { useTranslations } from 'hooks/useTranslations';
import { styles } from '../../css/sections.styles';

const FifthSection = () => {
  const classes = styles();
  const translations = useTranslations();

  return (
    <Grid className={classes.mainSection}>
      <Grid className={classes.firstSection}>
        <Grid
          sx={{
            order: {
              xs: 1,
              md: 2
            },
            flex: 2,
            padding: '13px 10px'
          }}
        >
          <Typography className={classes.title}>
            {translations.dashboard.connectTitle}
          </Typography>

          <Typography className={classes.text}>
            {translations.dashboard.connectTxt}
          </Typography>
        </Grid>

        <Grid className={clsx(classes.imageContent, classes.evenImgSection)}>
          <Box
            component="img"
            className={classes.image}
            sx={{ mixBlendMode: 'multiply' }}
            src={PokemonImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FifthSection;
