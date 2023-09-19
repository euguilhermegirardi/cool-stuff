import { Grid, Typography, useTheme } from '@mui/material';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import { navbarPages } from 'shared/css/navbarPages.styles';

const ContactUs = () => {
  const theme = useTheme();
  const classes = navbarPages();

  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      sx={{
        padding: theme.spacing(3),
        width: '100%',
        height: '100vh'
      }}
    >
      <MuiToolbar />

      <Grid className={classes.mainContent} sx={{ height: '100%' }}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row'
            },
            flexWrap: 'wrap'
          }}
        >
          <Typography>Teste</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
