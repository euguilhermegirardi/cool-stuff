import { Drawer } from '@mui/material';
import { MobilePokemonTableListProps } from '../interfaces/mobilePokemonTableListProps';

type MuiDrawerProps = Pick<MobilePokemonTableListProps, 'isDrawerOpen' | 'toggleDrawer'>;

const MuiDrawer = ({
  isDrawerOpen,
  toggleDrawer,
}: MuiDrawerProps) => {
  return (
    <Drawer
      elevation={20}
      transitionDuration={2}
      anchor='bottom'
      open={isDrawerOpen}
      onClose={() => toggleDrawer()}
    >
      Testing
    </Drawer>
  );
};

export default MuiDrawer;
