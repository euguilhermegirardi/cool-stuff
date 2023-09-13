import { Box, Grid, Typography } from '@mui/material';
import PikachuImg from 'assets/images/Pikachu.png';
import { useTranslations } from 'hooks/useTranslations';

const FirstSection = () => {
  const translations = useTranslations();

  return (
    <Grid>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        {translations.dashboard.worldOfPokemonTitle}
      </Typography>

      <Grid
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: {
            xs: 'center',
            md: 'flex-start'
          },
          flexDirection: {
            sx: 'column',
            md: 'row'
          },
          alignItems: 'flex-start',
          margin: '0 15px'
        }}
      >
        <Typography
          sx={{
            order: 2,
            textAlign: 'justify',
            fontSize: 17,
          }}
        >
          {translations.dashboard.worldOfPokemonTxt}
        </Typography>

        <Box
          component="img"
          sx={{
            order: 1,
            maxHeight: 180,
            maxWidth: 180,
          }}
          src={PikachuImg}
          alt='Pokemon-logo'
        />
      </Grid>
    </Grid>
  );
};

export default FirstSection;
