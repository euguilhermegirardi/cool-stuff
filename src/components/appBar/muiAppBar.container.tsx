import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationRoutes from 'utils/navigation/applicationRoutes';
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
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const pages = ['Project Technologies', 'Contact Us'];
  const settings = ['Profile', 'Logout'];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleCloseNavMenu = () => {
    navigate(ApplicationRoutes.projectTechnologies);
  };

  return (
    <MuiAppBar
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
