import { ReactElement, useState } from 'react';
import AppLayout from './appLayout';

const AppLayoutContainer = ({ children }: { children: ReactElement }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerWidth = 240;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppLayout
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      children={children}
    />
  );
};

export default AppLayoutContainer;
