import MobileTableList from './components/mobilePokemonTableList';
import { PokemonListProps } from './interfaces/pokemonListProps';

const PokemonList = ({
  isMobileView,
  isLoading,
  pokemonData,
}: PokemonListProps) => {
  return (
    <>
      {isMobileView ? (
        <MobileTableList
          isLoading={isLoading}
          pokemonData={pokemonData}
        />
      ) : (
        <div>Desktop</div>
      )}
    </>
  );
};

export default PokemonList;
