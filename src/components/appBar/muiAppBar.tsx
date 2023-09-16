import { AppBar, Avatar, Box, Button, Container, Drawer, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MuiAppBarProps } from './interfaces/MuiAppBarProps';

const MuiAppBar = ({
  anchorElUser,
  drawerWidth,
  mobileOpen,
  pages,
  settings,
  handleDrawerToggle,
  handleOpenUserMenu,
  handleCloseUserMenu,
  handleCloseNavMenu,
}: MuiAppBarProps) => {
  return (
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
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <p>AVATAR</p>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: 45 }}
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
  );
};

export default MuiAppBar;
