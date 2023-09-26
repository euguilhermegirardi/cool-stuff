import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import { MobilePokemonTableListProps } from './interfaces/mobilePokemonTableListProps';

const MobilePokemonTableList = ({
  isLoading,
  isDrawerOpen,
  selectedPokemon,
  pokemonData,
  handleOpenMobileDrawer
}: MobilePokemonTableListProps) => {

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
      }}
    >
      <MuiToolbar />

      <Box component={'div'} mt={2}>
        <Typography>Pokemon - Header</Typography>
      </Box>

      <List sx={{ overflowY: 'auto' }}>
        {pokemonData.map((pokemon: any) => {
          return (
            <ListItem
              key={pokemon.id}
              onClick={() => handleOpenMobileDrawer(pokemon.id)}
            >
              <Typography>
                {pokemon.name}
              </Typography>
              <Box component={'div'}>
                <KeyboardArrowRightIcon fontSize={'medium'} />
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default MobilePokemonTableList;
