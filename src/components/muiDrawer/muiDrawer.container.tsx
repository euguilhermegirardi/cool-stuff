import { useState } from 'react';
import MuiDrawer from './muiDrawer';

const MuiDrawerContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const drawerWidth = 240;
  const pages = ['Project Technologies', 'Contact Us'];
  const settings = ['Profile', 'Logout'];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <MuiDrawer
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
  )
};

export default MuiDrawerContainer;
