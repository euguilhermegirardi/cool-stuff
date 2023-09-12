import { Avatar, Box, Button, Container, Drawer, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import DrawerList from './components/drawerList';
import { MuiDrawerProps } from './interfaces/MuiDrawerProps';

const MuiDrawer = ({
  anchorElNav,
  anchorElUser,
  drawerWidth,
  mobileOpen,
  pages,
  settings,
  handleDrawerToggle,
  handleOpenUserMenu,
  handleCloseUserMenu,
  handleCloseNavMenu,
}: MuiDrawerProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          height: 111,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },

        }}
      >
        <Toolbar sx={{ height: '100%' }}>
          {/* Hamburger menu for mobile starts */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Hamburger menu for mobile ends */}

          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* List items for desktop starts */}
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mx: 1.5, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              {/* List items for desktop ends */}

              {/* Icon and menu items for mobile starts */}
              <Typography
                sx={{
                  fontFamily: 'cursive',
                  fontSize: 25,
                  letterSpacing: 3,
                  marginRight: {
                    md: 5
                  }
                }}
              >
                cool stuff
              </Typography>
              {/* Icon and menu items for mobile ends */}

              {/* Profile menu for desktop starts */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* Profile menu desktop ends */}
            </Toolbar>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Permanent menu on the left for desktop starts */}
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
          <DrawerList />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerList />
        </Drawer>
      </Box>
      {/* Permanent menu on the left for desktop ends */}

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
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
    </Box>
  );
};

export default MuiDrawer;
