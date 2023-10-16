import { useContext } from 'react';
import PokemonContext from 'context/pokemon.context';
import DesktopPokemonTableList from './desktopPokemonTableList';

const DesktopPokemonTableListContainer = () => {
  const { pokemonData } = useContext(PokemonContext);

  return (
    <DesktopPokemonTableList pokemonData={pokemonData} />
  );
};

export default DesktopPokemonTableListContainer;
