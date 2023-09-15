import { Toolbar } from '@mui/material';

const MuiToolbar = () => {
  return (
    <Toolbar
      sx={{
        minHeight: {
          xs: 100,
          md: 120,
          lg: 110
        }
      }}
    />
  );
};

export default MuiToolbar;
