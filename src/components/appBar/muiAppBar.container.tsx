import { useState } from 'react';
import MuiAppBar from './muiAppBar';

const MuiAppBarContainer = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle
}: {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const pages = ['Project Technologies', 'Contact Us'];
  const settings = ['Profile', 'Logout'];


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <MuiAppBar
      anchorElNav={anchorElNav}
      anchorElUser={anchorElUser}
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      pages={pages}
      settings={settings}
      handleDrawerToggle={handleDrawerToggle}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      handleCloseNavMenu={handleCloseNavMenu}
    />
  );
};

export default MuiAppBarContainer;
