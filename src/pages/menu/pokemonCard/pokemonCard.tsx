import { Box, Grid } from '@mui/material';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import Card from './components/Card/card';
import { PokemonCardProps } from './interfaces/pokemonCardProps';

const PokemonCard = ({ pokemonData }: { pokemonData: PokemonCardProps[] }) => {
  return (
    <Grid
      sx={{
        p: 5,
        width: '100%',
        overflowX: 'auto'
      }}
    >
      <MuiToolbar />

      <Box
        component='div'
        display='grid'
        gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}
        columnGap={6}
        rowGap={6}
      >
        {pokemonData.map(((pokemon: any) => (
          <Card
            key={pokemon?.id}
            name={pokemon.name}
            hp={pokemon.stats[0].base_stat}
            sprite={pokemon.sprites.front_shiny}
            types={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
            moves={pokemon.moves}
            abilities={pokemon.abilities}
          />
        )))}
      </Box>
    </Grid>
  )
};

export default PokemonCard;
