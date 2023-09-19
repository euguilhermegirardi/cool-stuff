import { CircularProgress, Grid } from '@mui/material';
import { useRef } from 'react';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import useGetContentInnerWidth from 'hooks/useGetContentInnerWidth';

const FullPageLoading = () => {
  const loadingComponentRef: any = useRef();

  return (
    <Grid
      ref={loadingComponentRef}
      sx={{ display: 'grid', placeItems: 'center' }}
    >
      <MuiToolbar />

      <CircularProgress />
    </Grid>
  );
};

export default FullPageLoading;
