import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PokemonLogo from 'assets/images/pokemon-logo-png.png';
import { drawerListItems, ListItemProps } from './models/drawerListItem';

const DrawerList = () => {
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
        {drawerListItems.length > 0 &&
          drawerListItems.map((listItem: ListItemProps, index: number) => (
            <ListItem key={listItem.id} disablePadding sx={{ display: 'block' }}>
              <NavLink to={listItem.path} style={{ textDecoration: 'none', color: '#000' }}>
                {({ isActive, isPending }) => (
                  <ListItemButton sx={{
                    backgroundColor: isPending ? 'inherit' : isActive ? 'ceruleanBlue.main' : 'transparent'
                  }}>
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

      <Divider />

      <List>
        {['Add Custom Pokemon'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div >
  )
};

export default DrawerList;
