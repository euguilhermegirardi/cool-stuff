import { Box, Drawer, Toolbar } from '@mui/material';
import DrawerMenu from './components/drawerMenu/drawerMenu';
import { MuiAppDrawerProps } from './interfaces/muiAppDrawerProps';

const MuiAppDrawer = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle
}: MuiAppDrawerProps) => {

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerMenu />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <DrawerMenu />
      </Drawer>
    </Box>
  )
};

export default MuiAppDrawer;
