import { useContext, useState } from 'react';
import PokemonContext from 'context/pokemon.context';
import DesktopPokemonTableList from './desktopPokemonTableList';

const DesktopPokemonTableListContainer = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { pokemonData } = useContext(PokemonContext);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = pokemonData.map((pokemon: any) => {
    return {
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      specialAttack: pokemon.stats[3].base_stat,
      specialDefense: pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat,
      baseExperience: pokemon.base_experience,
    }
  });

  return (
    <DesktopPokemonTableList
      page={page}
      rowsPerPage={rowsPerPage}
      rows={rows}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default DesktopPokemonTableListContainer;
