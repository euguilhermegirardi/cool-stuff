import { ReactElement, useMemo } from 'react';
import PokemonContext from 'context/pokemon.context';
import { useFetchAllPokemon } from 'hooks/useFetchAllPokemon';

const PokemonProvider = ({ children }: { children: ReactElement }) => {
  const {
    isLoading,
    pokemonData
  } = useFetchAllPokemon();

  const providerObj = useMemo(() => ({
    isLoading,
    pokemonData
  }), [isLoading, pokemonData]);

  return (
    <PokemonContext.Provider value={providerObj}>
      {children}
    </PokemonContext.Provider>
  )
};

export default PokemonProvider;
