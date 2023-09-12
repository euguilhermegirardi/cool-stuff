import { Box, Toolbar } from '@mui/material';
import { ReactElement } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAppBar from 'components/appBar';
import MuiAppDrawer from 'components/appDrawer';

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar />
      <MuiAppDrawer />
      <Toolbar />
      {children}
    </Box>
  );
};

export default AppLayout;
