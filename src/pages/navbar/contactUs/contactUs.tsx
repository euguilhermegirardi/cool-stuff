import { Grid, InputAdornment, TextField, Typography, useTheme } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GhostImg from 'assets/images/ghost.png';
import Pokeball from 'assets/images/pokeball.png';
import MuiToolbar from 'components/muiToolbar/muiToolbar';
import MuiSkeleton from 'components/skeleton/muiSkeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
            flexDirection: 'column',
            justifyContent: {
              xs: 'space-between',
              md: 'flex-start'
            },
            flexWrap: 'wrap',
            height: '100%'
          }}
        >
          <Grid>
            <Typography className={classes.title}>
              Contact Us
            </Typography>

            <Typography fontSize={22} my={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
              Do you have anything to discuss? Please, contact us! We will be happy to reach out and discuss what you have in mind!
            </Typography>
          </Grid>

          <Grid
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            sx={{
              flexDirection: {
                xs: 'column',
                lg: 'row'
              }
            }}
          >
            <Grid flex={2} width={'100%'} mb={2}>
              <form
                // onSubmit={onsubmit()}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '100%'
                }}
              >
                <TextField
                  placeholder='name'
                  type='text'
                  defaultValue=''
                  // {register('contact-us-name')}
                  // error={!!formErrors?.message}
                  InputProps={{
                    style: {
                      height: 40,
                      paddingLeft: theme.spacing(0.5),
                      borderRadius: 0,
                      marginBottom: theme.spacing(1)
                    },
                    startAdornment: (
                      <InputAdornment
                        position="start"
                      >
                        <img src={Pokeball} alt="pokeball-icon" style={{ width: 30 }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  placeholder='email'
                  type='text'
                  defaultValue=''
                  // {register('contact-us-email')}
                  // error={!!formErrors?.message}
                  InputProps={{
                    style: {
                      height: 40,
                      paddingLeft: theme.spacing(0.5),
                      borderRadius: 0,
                      marginBottom: theme.spacing(1)
                    },
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ color: '#000' }}
                      >
                        <MailOutlineIcon sx={{ width: 30 }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  id="outlined-multiline-static"
                  multiline
                  minRows={4}
                  maxRows={10}
                  placeholder='Message...'
                  defaultValue=' '
                />
              </form>
            </Grid>

            <Grid flex={2} display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} width={'100%'}>
              <Grid>
                <LazyLoadImage
                  src={GhostImg}
                  placeholder={
                    <MuiSkeleton
                      variant='rounded'
                      width={345}
                      height={227}
                    />
                  }
                  effect='blur'
                  width='100%'
                  height='auto'
                  alt='ghost-pokemon'
                  style={{
                    maxWidth: '400px',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
