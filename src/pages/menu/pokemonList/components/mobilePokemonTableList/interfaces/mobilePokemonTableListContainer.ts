import { PokemonListProps } from 'pages/menu/pokemonList/interfaces/pokemonListProps';

export interface MobilePokemonTableListContainerProps extends Pick<
  PokemonListProps,
  'isLoading' |
  'pokemonData'
> { };
