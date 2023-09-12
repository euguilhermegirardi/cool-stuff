import { useState } from 'react';
import MuiAppDrawer from './muiAppDrawer';

const MuiAppDrawerContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerWidth = 240;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <MuiAppDrawer
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
    />
  );
};

export default MuiAppDrawerContainer;
