import { MobilePokemonTableListProps } from '../../interfaces/mobilePokemonTableListProps';

export interface MuiDrawerProps extends Pick<
  MobilePokemonTableListProps,
  'isDrawerOpen' |
  'toggleDrawer'
> {
  name: string;
  weight: number;
  sprite: string;
  stats: any[];
};
