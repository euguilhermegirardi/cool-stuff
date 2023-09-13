import { Box, Toolbar } from '@mui/material';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAppBar from 'components/appBar';
import MuiAppDrawer from 'components/appDrawer';
import { AppLayoutProps } from './interfaces/appLayoutProps';

const AppLayout = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  children
}: AppLayoutProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <MuiAppDrawer
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Toolbar />
      {children}
    </Box>
  );
};

export default AppLayout;
