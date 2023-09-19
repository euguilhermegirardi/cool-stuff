import { AppBar, Avatar, Box, Button, Container, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { MuiAppBarProps } from './interfaces/MuiAppBarProps';
import { appBarListItems } from './models/appBarListItem';

const MuiAppBar = ({
  anchorElUser,
  drawerWidth,
  mobileOpen,
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

        <Grid display={'flex'} sx={{ width: '100%' }}>
          <Grid flex={2} display={'flex'}>
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <List>
                {/* List items for desktop starts */}
                {appBarListItems.map((item) => (
                  <ListItem key={item.id} disablePadding sx={{ display: 'block', minWidth: 'fit-content' }}>
                    <NavLink to={item.path} style={{ textDecoration: 'none', color: '#000' }}>
                      {({ isActive, isPending }) => (
                        <ListItemButton
                          disableRipple
                          sx={{
                            color: isPending ? '#000' : isActive ? 'goldenYellow.main' : '#000',
                            "&:hover": {
                              color: 'goldenFoil.main',
                              background: 'none',
                            }
                          }}
                        >
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      )}
                    </NavLink>
                  </ListItem>
                ))}
              </List>
              {/* List items for desktop ends */}
            </Toolbar>
          </Grid>

          <Grid flex={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MuiAppBar;
