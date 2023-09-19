import MuiAppDrawer from './muiAppDrawer';

const MuiAppDrawerContainer = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle
}: {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}) => {
  return (
    <MuiAppDrawer
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
    />
  );
};

export default MuiAppDrawerContainer;
