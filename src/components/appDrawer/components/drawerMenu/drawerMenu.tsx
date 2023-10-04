import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PokemonLogo from 'assets/images/pokemon-logo-png.png';
import { drawerMenu, DrawerMenuProps } from './models/drawerMenu';

const DrawerMenu = () => {
  return (
    <div>
      <Grid sx={{ display: 'grid', placeItems: 'center' }}>
        <Box
          component="img"
          sx={{
            maxHeight: 110,
            maxWidth: 200,
          }}
          src={PokemonLogo}
          alt='Pokemon-logo'
        />
      </Grid>

      <Divider />

      <List>
        {drawerMenu.length > 0 &&
          drawerMenu.map((listItem: DrawerMenuProps, index: number) => (
            <ListItem key={listItem.id} disablePadding sx={{ display: 'block' }}>
              <NavLink to={listItem.path} style={{ textDecoration: 'none', color: '#000' }}>
                {({ isActive, isPending }) => (
                  <ListItemButton
                    sx={{
                      backgroundColor: isPending ? 'inherit' : isActive ? 'ceruleanBlue.main' : 'transparent',
                      color: isPending ? '#000' : isActive ? 'goldenYellow.main' : '#000',
                      "&:hover": {
                        color: '#000',
                        backgroundColor: 'goldenFoil.main'
                      }
                    }}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={listItem.name} />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default DrawerMenu;
