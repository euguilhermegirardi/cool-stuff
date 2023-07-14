import { Grid, Typography, useTheme } from '@mui/material';
import { useTranslations } from '../../../hooks/useTranslations';

const CoolStuffSubtitle = () => {
  const theme = useTheme();
  const translations = useTranslations();

  return (
    <Typography
      sx={{
        color: 'darkGrey.main',
        fontStyle: 'italic',
        fontWeight: 100,
      }}
    >
      {translations.coolStuff}
    </Typography>
  );
};

export default CoolStuffSubtitle;
