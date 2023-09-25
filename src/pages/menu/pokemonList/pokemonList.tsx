import MobileTableList from './components/mobilePokemonTableList/mobilePokemonTableList';
import { PokemonListProps } from './interfaces/pokemonListProps';

const PokemonList = ({
  isMobileView,
  isLoading,
  isDrawerOpen,
  selectedPokemon,
  pokemonData,
  handleOpenMobileDrawer
}: PokemonListProps) => {
  return (
    <>
      {isMobileView ? (
        <MobileTableList
          isLoading={isLoading}
          isDrawerOpen={isDrawerOpen}
          selectedPokemon={selectedPokemon}
          pokemonData={pokemonData}
          handleOpenMobileDrawer={handleOpenMobileDrawer}
        />
      ) : (
        <div>Desktop</div>
      )}
    </>
  );
};

export default PokemonList;
