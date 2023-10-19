import { Box, Grid, List, ListItem, Typography, useTheme } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import { MobilePokemonTableListProps } from './interfaces/mobilePokemonTableListProps';
import MuiDrawer from './muiDrawer/muiDrawer';

const MobilePokemonTableList = ({
  isDrawerOpen,
  selectedPokemon,
  pokemonData,
  toggleDrawer,
}: MobilePokemonTableListProps) => {
  const theme = useTheme();

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

      <Box
        component='div'
        mt={2}
        padding={theme.spacing(2)}
        borderBottom={'3px solid #ccc'}
      >
        <Typography fontSize={22} fontWeight='bold'>Pokemon</Typography>
      </Box>

      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
        }}
      >
        {pokemonData.map((pokemon: any) => {
          return (
            <ListItem
              divider
              key={pokemon.id}
              onClick={() => toggleDrawer(pokemon.id)}
              sx={{
                justifyContent: 'space-between',
                padding: theme.spacing(2),
              }}
            >
              <Typography fontSize={18} textTransform='capitalize' letterSpacing={1}>
                {pokemon.name}
              </Typography>

              <Box component='div' display='flex' alignItems='center'>
                <KeyboardArrowRightIcon fontSize='medium' />
              </Box>
            </ListItem>
          );
        })}
      </List>

      <MuiDrawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        name={selectedPokemon.name}
        weight={selectedPokemon.weight}
        sprite={selectedPokemon.sprites?.front_default}
        stats={selectedPokemon.stats}
      />
    </Grid>
  );
};

export default MobilePokemonTableList;
