export interface PokemonListStateProps {
  openMobileDrawer: {
    isOpen: boolean,
    selectedPokemon: []
  },
};

export const initialPokemonListState: PokemonListStateProps = {
  openMobileDrawer: {
    isOpen: false,
    selectedPokemon: []
  },
};
