import { Box, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import MuiButton from 'components/muiButton/muiButton';
import MuiDrawer from 'components/muiDrawer';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';

const drawerWidth = 240;

const Dashboard = withErrorBoundary(({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) => {
  const translations = useTranslations();

  return (
    <Box>
      <MuiDrawer />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
      </Box>

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
