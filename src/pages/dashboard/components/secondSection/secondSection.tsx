import { Box, Grid, Typography } from '@mui/material';
import SquirtleImg from 'assets/images/squirtle.jpeg';
import { useTranslations } from 'hooks/useTranslations';

const SecondSection = () => {
  const translations = useTranslations();

  return (
    <Grid
      sx={{
        backgroundColor: '#b3a1254d',
        color: 'darkGrey.main',
        mt: 5
      }}
    >
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        {translations.dashboard.exploreTitle}
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
          margin: '0 15px',
          padding: '15px 0'
        }}
      >
        <Grid sx={{ flex: 2, padding: '13px 10px' }}>
          <Typography
            sx={{
              order: 2,
              textAlign: 'justify',
              fontSize: 17,
            }}
          >
            {translations.dashboard.exploreTxt}
          </Typography>
        </Grid>

        <Grid sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            component="img"
            sx={{
              order: 1,
              maxHeight: 180,
              maxWidth: 180,
              mixBlendMode: 'multiply',
            }}
            src={SquirtleImg}
            alt='Pokemon-logo'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondSection;
