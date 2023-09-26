import { PokemonListProps } from 'pages/menu/pokemonList/interfaces/pokemonListProps';

export interface MobilePokemonTableListProps extends Pick<
  PokemonListProps,
  'isLoading' |
  'pokemonData'
> {
  isDrawerOpen: boolean;
  selectedPokemon: any[];
  handleOpenMobileDrawer: (id: number) => void;
};
