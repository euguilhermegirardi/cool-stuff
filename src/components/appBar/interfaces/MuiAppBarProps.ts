export interface MuiAppBarProps {
  anchorElUser: HTMLElement | null;
  drawerWidth: number;
  mobileOpen: boolean;
  settings: string[];
  handleDrawerToggle: () => void;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  handleCloseNavMenu: () => void;
};
