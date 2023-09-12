import { Box, Typography } from '@mui/material';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';

const Dashboard = withErrorBoundary(({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) => {
  const translations = useTranslations();

  return (
    <Box>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
        Convallis convallis tellus id
      </Typography>

      <MuiButton
        type='button'
        color='ceruleanBlue'
        text={translations.dashboard.logout}
        onClick={handleLogOut}
      />
    </Box>
  );
}, ErrorFallbackComponent);

export default Dashboard;
