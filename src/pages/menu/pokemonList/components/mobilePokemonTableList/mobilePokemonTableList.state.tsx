export interface MobilePokemonTableListStateProps {
  openMobileDrawer: {
    isOpen: boolean,
    selectedPokemon: []
  },
};

export const initialMobilePokemonTableListState: MobilePokemonTableListStateProps = {
  openMobileDrawer: {
    isOpen: false,
    selectedPokemon: []
  },
};
