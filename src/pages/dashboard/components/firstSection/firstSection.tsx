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
            xs: 'column',
            md: 'row'
          },
          alignItems: 'flex-start',
          margin: '0 15px',
          padding: '15px 0'
        }}
      >
        <Grid sx={{
          order: {
            xs: 1,
            md: 2
          },
          flex: 2,
          padding: '13px 10px'
        }}
        >
          <Typography
            sx={{
              textAlign: 'justify',
              fontSize: 17,
            }}
          >
            {translations.dashboard.worldOfPokemonTxt}
          </Typography>
        </Grid>

        <Grid sx={{
          order: {
            xs: 2,
            md: 1
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          width: '100%'
        }}
        >
          <Box
            component="img"
            sx={{

              maxHeight: 180,
              maxWidth: 180,
            }}
            src={PikachuImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstSection;
