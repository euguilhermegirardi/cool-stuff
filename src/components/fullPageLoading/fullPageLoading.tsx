import { CircularProgress, Grid } from '@mui/material';
import { useRef } from 'react';
import MuiToolbar from 'components/muiToolbar/muiToolbar';

const FullPageLoading = () => {
  const loadingComponentRef: any = useRef();

  return (
    <Grid
      ref={loadingComponentRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <MuiToolbar />

      <CircularProgress />
    </Grid>
  );
};

export default FullPageLoading;
