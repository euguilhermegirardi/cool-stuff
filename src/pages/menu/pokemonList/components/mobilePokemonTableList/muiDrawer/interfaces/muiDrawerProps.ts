import { MobilePokemonTableListProps } from '../../interfaces/mobilePokemonTableListProps';

export interface MuiDrawerProps extends Pick<
  MobilePokemonTableListProps,
  'isDrawerOpen' |
  'toggleDrawer'
> {
  selectedPokemon: any;
};
