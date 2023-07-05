import { Grid, Typography, useTheme } from '@mui/material';
import { useTranslations } from '../../hooks/useTranslations';

const CoolStuffSubtitle = ({
  width,
}: {
  width: string;
}) => {
  const theme = useTheme();
  const translations = useTranslations();

  return (
    <Grid
      display={'flex'}
      justifyContent={'flex-end'}
      sx={{ width: width }}
    >
      <Typography
        sx={{
          color: 'darkGrey.main',
          fontStyle: 'italic',
          fontWeight: 100,
        }}
      >
        {translations.coolStuff}
      </Typography>
    </Grid>
  );
};

export default CoolStuffSubtitle;
