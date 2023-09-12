import ApplicationRoutes from 'utils/navigation/applicationRoutes';
import translations from 'utils/translations';

export interface DrawerMenuProps {
  id: number;
  path: string;
  name: string;
};

export const drawerMenu: DrawerMenuProps[] = [
  {
    id: 1,
    path: ApplicationRoutes.dashboard,
    name: translations.dashboard.title
  },
  {
    id: 2,
    path: ApplicationRoutes.pokemonList,
    name: translations.pokemonList.title
  },
  {
    id: 3,
    path: ApplicationRoutes.pokemonCard,
    name: translations.pokemonCard.title
  },
  {
    id: 4,
    path: ApplicationRoutes.pokemonStatistics,
    name: translations.pokemonStatistics.title
  },
];
