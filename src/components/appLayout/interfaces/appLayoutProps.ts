import { ReactElement } from 'react';

export interface AppLayoutProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  children: ReactElement;
};
