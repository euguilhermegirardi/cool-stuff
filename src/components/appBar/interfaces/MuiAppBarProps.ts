export interface MuiAppBarProps {
  anchorElNav: HTMLElement | null;
  anchorElUser: HTMLElement | null;
  drawerWidth: number;
  mobileOpen: boolean;
  pages: string[];
  settings: string[];
  handleDrawerToggle: () => void;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  handleCloseNavMenu: () => void;
};