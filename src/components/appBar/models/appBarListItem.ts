import { DrawerMenuProps } from 'components/appDrawer/components/drawerMenu/models/drawerMenu';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';

export interface AppBarListItems extends DrawerMenuProps { };

export const appBarListItems: AppBarListItems[] = [
  {
    id: 1,
    path: ApplicationRoutes.projectTechnologies,
    name: 'Project Technologies',
  },
  {
    id: 2,
    path: ApplicationRoutes.contactUs,
    name: 'Contact Us',
  },
];
