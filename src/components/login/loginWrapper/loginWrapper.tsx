import { Grid, useTheme } from '@mui/material';
import { ReactElement } from 'react';

const LoginWrapper = ({ children }: { children: ReactElement }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent={'space-evenly'}
      alignItems={'center'}
      flexDirection={'column'}
      sx={{
        margin: '0 auto',
        padding: '4rem 0',
        backgroundColor: theme.palette.common.white,
        borderRadius: 2,
        width: {
          xs: 340,
          md: 500
        },
        height: {
          xs: 500,
          md: 'auto'
        },
        minHeight: {
          md: 500
        }
      }}
    >
      {children}
    </Grid>
  )
};

export default LoginWrapper;
