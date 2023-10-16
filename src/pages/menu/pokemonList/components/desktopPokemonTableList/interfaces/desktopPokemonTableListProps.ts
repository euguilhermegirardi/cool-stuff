import { PokemonListProps } from 'pages/menu/pokemonList/interfaces/pokemonListProps';

export interface DesktopPokemonTableListProps extends Pick<
  PokemonListProps,
  'pokemonData'
> { };
