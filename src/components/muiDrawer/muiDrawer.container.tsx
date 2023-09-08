import { useState } from 'react';
import MuiDrawer from './muiDrawer';

const MuiDrawerContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerWidth = 240;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <MuiDrawer
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}

    />
  )
};

export default MuiDrawerContainer;
