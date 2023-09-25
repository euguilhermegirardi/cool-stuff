import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import { PokemonListProps } from '../../interfaces/pokemonListProps';

type MobilePokemonTableListProps = Omit<PokemonListProps, 'isMobileView'>;

interface Column {
  id: 'name';
  label: string;
};

const MobilePokemonTableList = ({
  isLoading,
  isDrawerOpen,
  selectedPokemon,
  pokemonData,
  handleOpenMobileDrawer
}: MobilePokemonTableListProps) => {
  console.log('selectedPokemon', selectedPokemon)

  return (
    <Grid>
      <MuiToolbar />

      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                Pokemon
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pokemonData.map((pokemon: any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={pokemon.id}>
                  <TableCell>
                    {pokemon.name}
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: 'right' }}
                    onClick={() => handleOpenMobileDrawer(pokemon.id)}
                  >
                    <KeyboardArrowRightIcon fontSize={'medium'} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>

      {/* {isDrawerOpen ? (
        <div>OPENED</div>
      ) : null} */}
    </Grid>
  );
};

export default MobilePokemonTableList;
