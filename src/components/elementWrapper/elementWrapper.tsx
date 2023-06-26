import { Grid } from '@mui/material';
import { ReactElement } from 'react';

const ElementWrapper = ({
  children,
  xs
}: {
  children: ReactElement;
  xs: number;
}) => {
  return (
    <Grid
      container
      xs={xs}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Grid>
  )
};

export default ElementWrapper;
