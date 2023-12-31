import { AppBar, Box, Button, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
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
  handleLogout
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
          <Grid
            flex={2}
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <List sx={{ display: 'flex' }}>
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

          <Grid
            flex={1}
            display={'flex'}
            alignItems={'center'}
            sx={{
              justifyContent: {
                xs: 'flex-end',
                md: 'center'
              }
            }}
          >
            <Typography
              sx={{
                fontFamily: 'cursive',
                fontSize: 25,
                letterSpacing: 3,
                marginRight: {
                  xs: 2,
                  md: 5
                }
              }}
            >
              cool stuff
            </Typography>

            {/* Profile menu for desktop starts */}
            <div>
              <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenUserMenu}>
                  <PersonIcon fontSize='large' sx={{ color: 'goldenYellow.main' }} />
                </Button>

              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorElUser}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
            {/* Profile menu desktop ends */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MuiAppBar;
