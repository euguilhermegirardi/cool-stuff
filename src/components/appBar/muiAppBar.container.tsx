import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
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
  const { logout } = useAuth();
  const settings = ['Logout'];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => { setAnchorElUser(null) };

  const handleLogout = () => { logout() };

  const handleCloseNavMenu = () => {
    navigate(ApplicationRoutes.projectTechnologies);
  };

  return (
    <MuiAppBar
      anchorElUser={anchorElUser}
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      settings={settings}
      handleDrawerToggle={handleDrawerToggle}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      handleCloseNavMenu={handleCloseNavMenu}
      handleLogout={handleLogout}
    />
  );
};

export default MuiAppBarContainer;
