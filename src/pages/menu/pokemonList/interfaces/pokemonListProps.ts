export interface PokemonListProps {
  isMobileView: boolean;
  isLoading: boolean;
  isDrawerOpen: boolean;
  selectedPokemon: any[],
  pokemonData: any[];
  handleOpenMobileDrawer: (id: number) => void;
};
