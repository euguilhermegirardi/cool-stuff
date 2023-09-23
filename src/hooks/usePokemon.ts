import { useContext } from 'react';
import PokemonContext from 'context/pokemon.context';

const usePokemon = () => {
  return useContext(PokemonContext)
};

export default usePokemon;
